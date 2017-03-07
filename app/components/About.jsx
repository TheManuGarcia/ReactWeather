var React = require('react');

var About = (props) => {
  return (
      <div>
          <h1 className="text-center">About</h1>
          <p>Weather App built on React. I built this while learning React from a tutorial</p>
          <p>Technologies used:</p>
          <ul>
              <li>
                  <a href="https://facebook.github.io/react">React</a> - JavaScript framework.
              </li>
              <li>
                  <a href="http://openweathermap.org">Open Weather Map</a> - API used to search weather data.
              </li>
          </ul>
      </div>
  )
};

module.exports = About;