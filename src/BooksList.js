import React from 'react'

import Bookshelf from './Bookshelf'

export default class BooksList extends React.Component {

  render(){

    return (
      <div className="list-books-content">
        <div>
          <Bookshelf title='Currently Reading' />
          <Bookshelf title='Want to Read' />
          <Bookshelf title='Read' />
        </div>
      </div>
    )
  }
}
