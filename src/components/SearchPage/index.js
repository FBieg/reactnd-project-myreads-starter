import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';
import Book from '../ListBooks/BookShelf/Book';

const cache = {};

const SearchPage = ({ bookList, updateBook }) => {
  const [searchText, setSearchText] = useState('');
  const [shelfList, setShelfList] = useState([]);

  useEffect(() => {
    if (cache[searchText]) {
      setShelfList(cache[searchText]);
      return;
    }

    // Preventing the execution of a request twice
    cache[searchText] = [];

    if (searchText) {
      search(searchText).then(data => {
        const results = Array.isArray(data) ? data : [];

        cache[searchText] = results;
        setShelfList(results);
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
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {shelfList.map(book => (
            <li key={book.id}>
              <Book
                {...(bookList.find(({ id }) => book.id === id) || book)}
                updateBook={updateBook}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
