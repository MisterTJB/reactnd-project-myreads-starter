import React from 'react'

import { update, get } from './BooksAPI'

export default class BookshelfChanger extends React.Component {

  constructor(props){
    super(props)
    this.changeShelf = this.changeShelf.bind(this)
    this.setState = this.setState.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      shelf: "none"
    }
  }

  changeShelf(event){
    const book = this.props.book
    const shelf = event.target.value

    update(book, shelf).then( (res) => {
      book.shelf = shelf
      this.setState({ shelf: shelf })

      if (this.props.updateShelves){
        this.props.updateShelves()
      }
    })

  }

  componentDidMount(){

    if (this.props.book.shelf) {
      this.setState( { shelf: this.props.book.shelf })
    } else {
      get(this.props.book.id).then( (book) => {
        this.setState( { shelf: book.shelf })
      })
    }
  }

  render() {
    return (
    <div className="book-shelf-changer">
      <select onChange={this.changeShelf} value={this.state.shelf}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div> )
  }
}
