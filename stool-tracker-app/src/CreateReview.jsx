import React, { useState } from 'react'

function CreateReview(props) {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form>
            <label htmlFor="type">Type</label>
            <input
                name="type "
                type="text"
                value={type}
                onChange={(event) => setType(event.target.value)}>
            </input>

            <label htmlFor="description">Description:</label>
            <textarea
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