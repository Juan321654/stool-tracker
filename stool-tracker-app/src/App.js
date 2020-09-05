import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Review from './Review';
import CreateReview from './CreateReview';
import './App.css';


function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/stool-tracker`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setReviews(response.data.records);
      console.log(response.data.records);

    }
    getReviews();
  }, []);

  return (
    <div>
      <div className="App">
        {
          reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))
        }
      </div>
      <CreateReview />
    </div>

  );
}

export default App;


//read data in postman
//check that works and get request
//set up an input field
//trey to do a post request