import React, { useEffect, useState } from 'react';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';
import { getAll, update } from './BooksAPI';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const BooksApp = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAll().then(data => {
      setBookList(data);
    });
  }, []);

  const updateBook = (id, shelf) => {
    update({ id }, shelf);

    setBookList(bookList.map(book => (book.id === id ? { ...book, shelf } : book)));
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage bookList={bookList} updateBook={updateBook} />
          </Route>
          <Route path="/">
            <ListBooks bookList={bookList} updateBook={updateBook} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default BooksApp;
