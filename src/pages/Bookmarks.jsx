import React from 'react';
import QuotedCards from '../components/QuotedCards';
import { useSelector,useDispatch } from 'react-redux';
import './Bookmarks.css';

const Bookmarks = () => {

  const dispatch = useDispatch();
  const {items} = useSelector((state)=> state.bookmark)

  return (
    <div className='bookmarkPage'>
    
  {items.length > 0 ? (items.map((item)=> (
    <div className="bookmarkContainer" key={item._id}>
      <QuotedCards item={item} />
    </div>
  ))):(
    <div>
      <h1 className='emptyBookmark' >No favourite added</h1>
    </div>
  )}
  </div>
  )
}

export default Bookmarks 