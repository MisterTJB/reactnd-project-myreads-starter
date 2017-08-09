import React from 'react'

import BookshelfChanger from './BookshelfChanger'

export default class Book extends React.Component {

  render(){

    const book = this.props.book

    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <BookshelfChanger changeShelf={this.changeShelf} book={book}/>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors }</div>
      </div>
    </li>
    )
  }
}
