import React from 'react'

import BooksGrid from './BooksGrid'

export default class Bookshelf extends React.Component {

  render() {
    const shelf = this.props.title
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ shelf }</h2>
      <BooksGrid books={this.props.books} updateShelves={this.props.updateShelves}/>
    </div>
  )
  }
}
