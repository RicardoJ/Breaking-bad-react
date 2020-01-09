import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [phrase, getPhrase] = useState({});

  const queryAPI = async () => {
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    getPhrase(result.data[0]);
  }

  useEffect(
    () => {
      queryAPI();
    },[]
  )
  console.log(phrase)
  return (
    <p>Hello</p>
  )
}

export default App;
