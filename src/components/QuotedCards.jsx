import React from 'react';
import { MdDelete } from 'react-icons/md';
import './QuoteCards.css'

const QuotedCards = ({item}) => {
  return (
    <div className='quoteContainer'>
                 
          <div className="message">
                {item.content}
          </div>
          < div className="author">
            <h5 className='authorName'>-{item.author}</h5>
            <MdDelete className='button' />

          </div>

        </div>
  )
}

export default QuotedCards