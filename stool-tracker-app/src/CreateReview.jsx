import React, { useState } from 'react'
import axios from 'axios';

function CreateReview() {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fields = {
            type,
            description
        };
        const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/stool-tracker`;
        // await axios.post(url, data, options (headers))
        await axios.post(airtableURL, { fields }, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                'Content-Type': 'application/json',
            }
        });
        setType('');
        setDescription('');
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="type">Type</label>
            <input
                name="type "
                type="text"
                value={type}
                onChange={(event) => setType(event.target.value)}>
            </input>

            <label htmlFor="description">Description:</label>
            <textarea className="user-text"
                name="description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}>
            </textarea>

            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateReview;