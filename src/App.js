import React, { useState } from 'react';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';
// import * as BooksAPI from './BooksAPI'
import './App.css';

const BooksApp = () => {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  const [showSearchPage, setSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage hideSearchPage={() => setSearchPage(false)} />
      ) : (
        <ListBooks showSearchPage={() => setSearchPage(true)} />
      )}
    </div>
  );
};

export default BooksApp;
