var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    // Parent function, proper naming convention according to onSearch
    handleSearch: function (location) {
      // this gets lost inside the Promise, therefore we create a that var
        var that = this;

        debugger;

       // When someone starts a search we set isLoading to true
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        // If things go well...
        openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
            location: location,
            temp: temp,
            // When data is fetched
            isLoading: false
        });
        // If things go poorly...
      }, function (e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
      });
    },

   render: function () {
        // Pulling both variables off of the State
        var{isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading){
               return <h3 className="text-center">Fetching weather...</h3>;
            } else if(temp && location){
                {/*Passing the variables as props*/}
                return  <WeatherMessage temp={temp} location={location}/>;
            }

        }

       // New function to conditionally render the error Modal
        function renderError () {
            if (typeof errorMessage === 'string'){
                return(
                    // Fetch the errorMessage
                    <ErrorModal message={errorMessage}/>
                )
            }
       }
        return(
         <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}

         </div>
       );

   }
});

module.exports = Weather;