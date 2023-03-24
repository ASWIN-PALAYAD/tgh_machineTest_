import React from 'react';
import './QuoteCard.css';
import {BsFillBookmarkPlusFill} from 'react-icons/bs';

const QuoteCard = ({quote}) => {
  return (
    <div className="quoteContainer">
        <div className="message">
            {quote.content}
        </div>
        <div className="author">
            <p className="authorName">-{quote.author}</p>
            <BsFillBookmarkPlusFill className='button' />

        </div>
    </div>
  )
}

export default QuoteCard