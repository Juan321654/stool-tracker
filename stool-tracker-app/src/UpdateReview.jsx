// import React, { useState } from 'react'
// import axios from 'axios';

// function UpdateReview() {
//     const [type, setType] = useState('');
//     const [text, setText] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const fields = {
//             type,
//             text
//         };
//         const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/stool-tracker`;
//         console.log(airtableURL)
//         // await axios.post(url, data, options (headers))
//         await axios.post(airtableURL, { fields }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//                 'Content-Type': 'application/json',
//             }
//         });
//         setType('');
//         setText('');
//     }

//     return (
//         <form className="user-form" onSubmit={handleSubmit}>
//             <label htmlFor="type">Type</label>
//             <input
//                 name="type "
//                 type="text"
//                 value={type}
//                 onChange={(event) => setType(event.target.value)}>
//             </input>

//             <label htmlFor="text">Description:</label>
//             <textarea className="user-text"
//                 name="text"
//                 type="text"
//                 value={text}
//                 onChange={(event) => setText(event.target.value)}>
//             </textarea>

//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default UpdateReview;