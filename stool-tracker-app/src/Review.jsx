import React, { useState } from 'react';
import axios from 'axios';

function Review(props) {
    const [type, setType] = useState(props.re);
    const [text, setText] = useState();
    const [time, setTime] = useState();



    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife`;
    // await axios.post(url, data, options (headers))
    await axios.post(airtableURL, { fields }, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            'Content-Type': 'application/json',
        }
    });

    return (
        <div>

        </div>
    )
}

export default Review;