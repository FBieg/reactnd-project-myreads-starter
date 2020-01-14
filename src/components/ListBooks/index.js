import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../../BooksAPI';
import BookShelf from './BookShelf';

const ListBooks = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAll().then(data => {
      setBookList([
        {
          shelfTitle: 'Currently Reading',
          books: data.filter(({ shelf }) => shelf === 'currentlyReading'),
        },
        {
          shelfTitle: 'Want to Read',
          books: data.filter(({ shelf }) => shelf === 'wantToRead'),
        },
        {
          shelfTitle: 'Read',
          books: data.filter(({ shelf }) => shelf === 'read'),
        },
      ]);
    });
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookList.map(shelf => (
          <BookShelf key={shelf.shelfTitle} {...shelf} />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
