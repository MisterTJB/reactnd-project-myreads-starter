import React from 'react'

import BooksGrid from './BooksGrid'

export default class SearchResults extends React.Component {

  render() {
    return (
    <div className="search-books-results">
      <BooksGrid books={this.props.results} />
    </div>
    )
  }

}
