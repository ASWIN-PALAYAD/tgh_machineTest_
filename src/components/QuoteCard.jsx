import React from 'react';
import './QuoteCard.css';

import { useDispatch } from 'react-redux';
import { addToBookmark } from '../redux/bookmark';

import {BsFillBookmarkPlusFill} from 'react-icons/bs';

const QuoteCard = ({quote}) => {

  const dispatch = useDispatch();

  return (
    <div className="quoteContainer">
        <div className="message">
            {quote.content}
        </div>
        <div className="author">
            <p className="authorName">-{quote.author}</p>
            <BsFillBookmarkPlusFill className='button' onClick={()=>dispatch(addToBookmark(quote))} />

        </div>
    </div>
  )
}

export default QuoteCard