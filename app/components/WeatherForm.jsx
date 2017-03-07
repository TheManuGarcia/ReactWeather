var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        // Pulls the value of the location
        var location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value="";

        // Calls parent function inside of Weather.jsx
            this.props.onSearch(location);
        }

    },

   render: function (){
       return(
         <div>
             {/*Every time the form is submitted onFormSubmit gets called*/}
             <form onSubmit={this.onFormSubmit}>
                 <input type="text" ref="location"/>
                 <button className="button expanded hollow">Get Weather</button>
             </form>
         </div>
       );
   }
});

module.exports = WeatherForm;