import React, { useState, useEffect } from 'react';
import axios from 'axios';


import QuoteCard from '../components/QuoteCard';
import './Home.css';

const Home = () => {

  const [quote, setQuote] = useState('');
  const [tags, setTags] = useState('');
  const [selectedTag, setSelectedTag] = useState('');


  const fetchData = async () => {
    const { data } = await axios.get(`https://api.quotable.io/random?tags=${selectedTag}`);
    setQuote(data);
  }

  const fetchTags = async () => {
    const resp = await axios.get('https://api.quotable.io/tags');
    setTags(resp.data)
  }

  useEffect(() => {
    fetchData();
  }, [selectedTag])

  useEffect(() => {
    fetchTags();
  }, [])

  const handleTag = (e) => {
    setSelectedTag(e.target.value);
  }


  return (
    
    
      <div className="homeContainer">
      {quote ? (
        <QuoteCard quote={quote} />
        ): (
          <div className='loading' >
            <h5>Loading......</h5>
          </div>
        )}
      
      <div className="select">
        <select name="tag" id="" onChange={(e) => handleTag(e)} >
          <option value="">Select a tag</option>
          {tags && tags.map((tag) => (
            <option value={tag.name} key={tag._id} >{tag.name}</option>
          ))}
        </select>
      </div>

      <button className='nextButton' onClick={fetchData} >Next Quote</button>

    </div>
    
   
    
  )
}

export default Home