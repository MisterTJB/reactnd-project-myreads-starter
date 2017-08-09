import React from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default class Search extends React.Component {

  constructor(props){

    super(props);
    this.state = { results: [] }

    this.updateResults = this.updateResults.bind(this);

  }

  updateResults(results){
    console.log("Results changed")
    this.setState( { results })
  }

  render() {
    console.log(this.state.results)
    return (<div className="search-books">
      <SearchBar updateResults={this.updateResults}/>
      <SearchResults results={this.state.results}/>
    </div>)
  }

}
