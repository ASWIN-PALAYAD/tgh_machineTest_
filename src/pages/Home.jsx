import React from 'react';
import QuoteCard from '../components/QuoteCard';

import './Home.css';
 
const Home = () => {
  return (
    <div className="homeContainer">
      <QuoteCard/>

      <div className="select">
        <select name="" id="">
          <option value="">Select a tag</option>
          <option value="">family</option>
          <option value="">house</option>
          <option value="">story</option>
          <option value="">poem</option>
        </select>
      </div>

      <button className='nextButton' >Next Quote</button>

    </div>
  )
}

export default Home