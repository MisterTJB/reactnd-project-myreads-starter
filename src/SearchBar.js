import React from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'

export default class SearchBar extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {
    this.setState({ value: event.target.value })
    search(this.state.value, 25).then( (books) => {
      this.props.updateResults(books)
    }).catch( () => this.props.updateResults([]))
  }

  render() {
    return (
      <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input value={this.state.value} onChange={this.updateQuery} type="text" placeholder="Search by title or author"/>
      </div>
    </div>)
  }
}
