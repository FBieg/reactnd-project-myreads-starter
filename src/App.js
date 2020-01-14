import React from 'react';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const BooksApp = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <ListBooks />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default BooksApp;
