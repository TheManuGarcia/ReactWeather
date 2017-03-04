var React = require('react');

var WeatherMessage = ({temp,location}) => {
// Using ES6 ({temp,location}) instead of:
    // var{temp,location} = props;
    return(
        <h3>It's {temp} in {location}</h3>
    )
};


module.exports = WeatherMessage;