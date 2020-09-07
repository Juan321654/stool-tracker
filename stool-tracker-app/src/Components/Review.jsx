import React from "react";

function Review(props) {
  const { type, text, time } = props.review.fields;

  return (
    <div className="user-post">
      <div className="user-post-time">
        <h4>{type}</h4>:<small>{time}</small>
      </div>

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Review;
