import React from 'react'

export default class BookshelfChanger extends React.Component {

  render() {
    return (
    <div className="book-shelf-changer">
      <select onChange={this.props.changeShelf} defaultValue={this.props.shelf ? this.props.shelf : "none"}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div> )
  }
}
