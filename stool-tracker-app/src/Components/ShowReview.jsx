import React, { useEffect, useState } from "react";
import Review from "./Review";
import axios from "axios";

function ShowReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/stool-tracker`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setReviews(response.data.records);
    };
    getReviews();
  }, []);

  return (
    <div>
      <div className="App">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default ShowReview;
