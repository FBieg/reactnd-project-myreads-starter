import React from 'react';
import PropTypes from 'prop-types';

const options = [
  { title: 'Currently Reading', value: 'currentlyReading' },
  { title: 'Want to Read', value: 'wantToRead' },
  { title: 'Read', value: 'read' },
  { title: 'None', value: 'none' },
];

const Book = ({ id, title, authors, shelf, imageLinks, updateBook }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          backgroundImage: `url("${imageLinks.smallThumbnail}")`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select
          value={shelf}
          onChange={e => updateBook({ id, title, authors, shelf, imageLinks }, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          {options.map(({ title, value }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors.join(', ')}</div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape({}),
  authors: PropTypes.arrayOf(PropTypes.string),
  shelf: PropTypes.string,
};

Book.defaultProps = {
  authors: [],
  shelf: 'none',
  imageLinks: {
    smallThumbnail: 'https://retohercules.com/images/no-photo-png-6.png',
  },
};

export default Book;
