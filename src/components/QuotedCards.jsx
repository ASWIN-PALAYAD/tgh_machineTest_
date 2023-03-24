import React from 'react';
import { MdDelete } from 'react-icons/md';
import './QuoteCards.css'

const QuotedCards = () => {
  return (
    <div className="quoteContainer">
        <div className="message">
            its a sample quotes for testing bookmark ui and functionalities
        </div>
        <div className="author">
            <h5 className='authorName' >-Aswin  S</h5>
            <MdDelete className='button' />
        </div>
    </div>
  )
}

export default QuotedCards