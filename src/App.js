import React, { Component } from 'react'
import HomePage from './Screens/HomePage/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Countdown from './Screens/Coutndown/Countdown'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/:event" exact render={() => <Countdown />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
