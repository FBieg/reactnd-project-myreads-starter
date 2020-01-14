import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';
import Book from '../ListBooks/BookShelf/Book';

const cache = {};

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (cache[searchText]) {
      setBookList(cache[searchText]);
      return;
    }

    if (searchText) {
      // Preventing the execution of a request twice
      cache[searchText] = [];

      search(searchText).then(data => {
        const results = Array.isArray(data) ? data : [];

        cache[searchText] = results;
        setBookList(results);
      });
    }
  }, [searchText]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={e => setSearchText(e.target.value.replace(/\W/g, ''))}
            value={searchText}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {bookList.map(book => (
            <li key={book.id}>
              <Book {...book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
