import React from 'react';
import BookShelf from './BookShelf';
import bookShelfList from './bookShelfList';

const ListBooks = ({ showSearchPage }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {bookShelfList.map(shelf => (
        <BookShelf {...shelf} />
      ))}
    </div>
    <div className="open-search">
      <button onClick={showSearchPage}>Add a book</button>
    </div>
  </div>
);

export default ListBooks;
