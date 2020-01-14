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

  const updateBook = (book, shelf) => {
    const isInList = bookList.find(({ id }) => book.id === id);
    update(book, shelf);

    if (isInList) {
      // update book shelf
      setBookList(
        bookList.map(singleBook => {
          if (singleBook.id === book.id) {
            return { ...singleBook, shelf };
          }
          return singleBook;
        })
      );
    } else {
      setBookList([...bookList, { ...book, shelf }]);
    }
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
