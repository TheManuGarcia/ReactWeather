var axios = require('axios');

// Make a variable that cannot be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bfda3060d6086f7625bfb25db8f1df54&units=imperial';


module.exports = {
    getTemp: function (location){
        // ES6 Template Strings
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // axios uses JS Promises
        return axios.get(requestURL).then(function (res) {

            // Check if cod and message (err) exist
            if(res.data.cod && res.data.message){
                throw new Error(res.response.data.message);

            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.response.data.message);

        });

    }

}
