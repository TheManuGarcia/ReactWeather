var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            location:'Miami',
            temp: 88
        }
    },
    // Parent function, proper naming convention according to onSearch
    handleSearch: function (location) {
      // this gets lost inside the Promise, therefore we create a that var
        var that = this;

        openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
            location: location,
            temp: temp
        });
      }, function (errorMessage){
          alert(errorMessage);
      });
    },

   render: function () {
        // Pulling both variables off of the State
        var{temp, location} = this.state;

       return(
         <div>
            <h3>Weather Component</h3>
            <WeatherForm onSearch={this.handleSearch}/>
           {/*Passing the variables as props*/}
             <WeatherMessage temp={temp} location={location}/>
         </div>
       );

   }
});

module.exports = Weather;