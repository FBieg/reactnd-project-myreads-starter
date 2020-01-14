import React from 'react';
import Book from './Book';

const BookShelf = ({ shelfTitle, books, updateBook }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book {...book} updateBook={updateBook} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
