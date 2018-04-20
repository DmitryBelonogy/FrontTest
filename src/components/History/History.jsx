import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './History.css';

class Item extends Component {
  render() {
    let data = this.props.data;
    return(
      <div className="item" onClick={() => this.props.showModal(data)}>
        <span>{this.props.data.time}</span>
        <span id="itemAdress">{this.props.data.adress}</span>
        <span>{this.props.data.coord}</span>
      </div>
    )
  }
}

class History extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adress: 'qwe',
      coord: '',
      time: null,
      weather: {
        temp: null,
        descr: ''
      }
    }
  }

  showModal = (data) => {
    this.setState({
      adress: data.adress,
      coord: data.coord,
      time: data.time,
      weather: data.weather
    });
    let modal = document.getElementsByClassName('modal')[0];
    modal.classList.remove('hide');
  }

  render() {
    let storage = JSON.parse(localStorage.getItem('history'));
    return (
      <div className="page">
        <Modal data={this.state} />
        {
          storage.map((item, index) => <Item key={index} data={item} showModal={this.showModal} />)
        }        
      </div>
    );
  }
}

export default History;