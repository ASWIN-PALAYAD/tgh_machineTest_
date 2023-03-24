import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromBookmark } from '../redux/bookmark';
import './QuoteCards.css'

const QuotedCards = ({item}) => {

  const dispatch = useDispatch();

  return (
    <div className='quoteContainer'>
                 
          <div className="message">
                {item.content}
          </div>
          < div className="author">
            <h5 className='authorName'>-{item.author}</h5>
            <MdDelete className='button' onClick={()=>dispatch(removeFromBookmark(item._id))} />

          </div>

        </div>
  )
}

export default QuotedCards