import React, { Component } from 'react';
import getWeather from '../../actions/getWeather';
import getCity from '../../actions/getCity';
import './MainPage.css';

let FIRST_RUN = true;
let IS_LOADED = false;

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      adress: '',
      coord: '',
      time: null,
      weather: {
        temp: null,
        descr: ''
      }
    }
  }

  componentDidMount() {
    console.log(FIRST_RUN);
    if(FIRST_RUN) {
      navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude;
        let latd = position.coords.latitude;
        getWeather(long, latd).then(data => {
          let current = data.currently;
          this.setState({
            weather: {
              temp: Math.round(current.apparentTemperature) + '°C',
              descr: current.summary
            }
          })
        });
        getCity(long, latd).then(locationName => {
          this.setState({
            adress: locationName,
            coord: long.toFixed(4) + ', ' + latd.toFixed(4),
            time: new Date().toLocaleString("ru", {month: 'long', day: 'numeric'})
          })
        })         
      });
      FIRST_RUN = false;
    } else {
      let storage = JSON.parse(localStorage.getItem('history'))[0];
      this.setState({
        ...storage
      })
    }
  }

  render() {
    if(this.state.adress && this.state.weather.temp && !IS_LOADED) {
      if(localStorage.length) {
        let storage = JSON.parse(localStorage.getItem('history'));
        storage.unshift(this.state);
        localStorage.setItem('history', JSON.stringify(storage));
        IS_LOADED = true;
      } else {
        let storage = [];
        storage.push(this.state);
        localStorage.setItem('history', JSON.stringify(storage));
        IS_LOADED = true;
      }      
    }    
    return (
      <div className="page">
        <div id="info">
          <span>Координаты</span>
          <span id="coord">{this.state.coord}</span>
          <span>Местность</span>
          <span id="address">{this.state.adress}</span>
        </div>        
        <div id="weather">
          <span id="temp">{this.state.weather.temp}</span>
          <span id="descr">{this.state.weather.descr}</span>
        </div>
      </div>
    );
  }
}

export default MainPage;