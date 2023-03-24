import React from 'react';
import './QuoteCard.css';
import {BsFillBookmarkPlusFill} from 'react-icons/bs';

const QuoteCard = () => {
  return (
    <div className="quoteContainer">
        <div className="message">
            its a dummy message to test the ui design and styles
        </div>
        <div className="author">
            <p className="authorName">-Aswin s</p>
            <BsFillBookmarkPlusFill className='button' />

        </div>
    </div>
  )
}

export default QuoteCard