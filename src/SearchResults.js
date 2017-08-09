import React from 'react'

import BooksGrid from './BooksGrid'

export default class SearchResults extends React.Component {

  render() {
    console.log(this.props.results)
    return (
    <div className="search-books-results">
      <BooksGrid books={this.props.results} />
    </div>
    )
  }

}
