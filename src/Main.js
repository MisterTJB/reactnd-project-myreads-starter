import React from 'react'
import { Link } from 'react-router-dom'

import BooksList from './BooksList'

export default class Main extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BooksList />
        <div className="open-search">
          <Link to="/add">Add a book</Link>
        </div>
      </div>
    )
  }
}
