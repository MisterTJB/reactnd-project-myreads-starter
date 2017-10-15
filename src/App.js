import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

import Search from './Search'
import Main from './Main'

class BooksApp extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/search" component={ Search }/>
          <Route exact path="/" component={ Main } />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
