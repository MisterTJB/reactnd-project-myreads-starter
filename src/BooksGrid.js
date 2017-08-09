import React from 'react'

import Book from './Book'

export default class BooksGrid extends React.Component {

  render() {
    const books = this.props.books

    return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        { books && books.map( (book) => <Book key={book.id} data={book} />) }
      </ol>
    </div>
    )
  }
}
