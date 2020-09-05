import React, { useState } from 'react';
import axios from 'axios';

function Review(props) {
    const { type, text, time } = props.review.fields


    // const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife`;
    // // await axios.post(url, data, options (headers))
    // await axios.post(airtableURL, { fields }, {
    //     headers: {
    //         'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    //         'Content-Type': 'application/json',
    //     }
    // });

    return (
        <div className="user-post">
            <div className="user-post-time">
                <h4>{type}</h4>:
                <small>{time}</small>
            </div>

            <div>
                <p>{text}</p>
            </div>


        </div>
    )
}

export default Review;