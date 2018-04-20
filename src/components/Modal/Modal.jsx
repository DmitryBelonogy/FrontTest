import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  hideModal = () => {
    let modal = document.getElementsByClassName('modal')[0];
    modal.classList.add('hide');
  }

  render() {
    return (
      <div className="modal hide">
        <span id="hide" onClick={this.hideModal}>X</span>
        <div id="info">
          <span>Координаты</span>
          <span id="coord">{this.props.data.coord}</span>
          <span>Местность</span>
          <span id="address">{this.props.data.adress}</span>
        </div>        
        <div id="weather">
          <span id="temp">{this.props.data.weather.temp}</span>
          <span id="descr">{this.props.data.weather.descr}</span>
        </div>
      </div>
    );
  }
}

export default Modal;