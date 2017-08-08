import React from 'react'

import Book from './Book'

export default class BooksGrid extends React.Component {

  render() {

    return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
      </ol>
    </div>
    )
  }
}
