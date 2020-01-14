import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

const ListBooks = ({ bookList, updateBook }) => {
  const shelfList = [
    {
      shelfTitle: 'Currently Reading',
      books: bookList.filter(({ shelf }) => shelf === 'currentlyReading'),
    },
    {
      shelfTitle: 'Want to Read',
      books: bookList.filter(({ shelf }) => shelf === 'wantToRead'),
    },
    {
      shelfTitle: 'Read',
      books: bookList.filter(({ shelf }) => shelf === 'read'),
    },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfList.map(shelf => (
          <BookShelf key={shelf.shelfTitle} updateBook={updateBook} {...shelf} />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
