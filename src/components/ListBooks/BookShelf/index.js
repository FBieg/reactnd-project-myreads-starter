import React from 'react';
import Book from './Book';

const BookShelf = ({ shelfTitle, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book {...book} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
