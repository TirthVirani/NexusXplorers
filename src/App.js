import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Router,Routes,Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
        <Routes>
          <NavBar></NavBar>
          <Route exact path="/General" elements={<News pageSize={6} country="in" category="general"></News>}></Route>
          <Route exact path="/Bussiness" elements={<News pageSize={6} country="in" category="bussiness"></News>}></Route>
          <Route exact path="/Entertaiment" elements={<News pageSize={6} country="in" category="entertaiment"></News>}></Route>
          <Route exact path="/Health" elements={<News pageSize={6} country="in" category="health"></News>}></Route>
          <Route exact path="/Science" elements={<News pageSize={6} country="in" category="science"></News>}></Route>
          <Route exact path="/Sports" elements={<News pageSize={6} country="in" category="sports"></News>}></Route>
          <Route exact path="/Technology" elements={<News pageSize={6} country="in" category="technology"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}