import React from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default class Search extends React.Component {

  render() {
    return (<div className="search-books">
      <SearchBar />
      <SearchResults />
    </div>)
  }

}
