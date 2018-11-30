import React from "react";
import Widget from "../components/widget";
import Editor from "../components/editor";
import fetch from "unfetch";

import "./style.css";
class WeatherWidget extends React.Component {
  state = {
    title: "",
    unit: "fahrenheit",
    wind: "windOn",
    lat: "",
    lon: "",
    temp: "",
    windSpeed: ""
  };

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    });
    this.fetchWeather();
  };

  fetchWeather = () => {
    const lat = Math.floor(parseInt(this.state.lat));
    const lon = Math.floor(parseInt(this.state.lon));
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=56821cc8d07d1b16cb6ea39efbc00fc6`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          temp: response.main.temp,
          windSpeed: response.wind.speed
        });
      });
  };

  render() {
    const { title, unit, windSpeed, temp } = this.state;
    console.log(windSpeed);
    return (
      <div>
        <button className="permissionBtn" onClick={this.getLocation}>
          Allow us to get your current location
        </button>
        <div className="weatherWidget">
          <Editor onChange={this.onChange} />
          <Widget title={title} unit={unit} wind={windSpeed} temp={temp} />
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
