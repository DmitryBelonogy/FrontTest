import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import History from './components/History/History';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <div id="nav">
            <Link className="btn" to="/">Домой</Link>
            <Link className="btn" to="/history">История</Link>
          </div>
          <hr />
          <Route exact path="/" component={MainPage} />
          <Route path="/history" component={History} />
        </div>
      </Router>
    )
  }
}

export default App;
