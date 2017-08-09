import React from 'react'

import { update } from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'

export default class Book extends React.Component {

  constructor(props){
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
  }

  changeShelf(event){
    const book = this.props.data
    const shelf = event.target.value

    update(book, shelf).then( (res) => {
      console.log(res)
    })
  }

  render(){

    const book = this.props.data
    console.log(book)

    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <BookshelfChanger changeShelf={this.changeShelf}/>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors }</div>
      </div>
    </li>
    )
  }
}
