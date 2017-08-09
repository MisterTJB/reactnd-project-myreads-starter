import React from 'react'

import { getAll } from './BooksAPI'

import Bookshelf from './Bookshelf'

export default class BooksList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    getAll().then( (books) => {
      this.setState({
        currentlyReading: books.filter( (book) => book.shelf === 'currentlyReading'),
        wantToRead: books.filter( (book) => book.shelf === 'wantToRead'),
        read: books.filter( (book) => book.shelf === 'read')
      })
    })
  }

  render(){

    return (
      <div className="list-books-content">
        <div>
          <Bookshelf title='Currently Reading' books={this.state.currentlyReading} />
          <Bookshelf title='Want to Read' books={this.state.wantToRead} />
          <Bookshelf title='Read' books={this.state.read} />
        </div>
      </div>
    )
  }
}
