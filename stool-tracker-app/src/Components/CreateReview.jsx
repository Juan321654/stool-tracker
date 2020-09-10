import React, { useState } from "react";
import axios from "axios";

function CreateReview(props) {
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      type,
      text,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/stool-tracker`;
    console.log(airtableURL);
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    setType("");
    setText("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label className="choose-type" htmlFor="type">
        Choose a type
      </label>

      <select
        id="type"
        name="type"
        value={type}
        onChange={(event) => {
          setType(event.target.value);
        }}
      >
        <option value="Type 1">Type 1</option>
        <option value="Type 2">Type 2</option>
        <option value="Type 3">Type 3</option>
        <option value="Type 4">Type 4</option>
        <option value="Type 5">Type 5</option>
        <option value="Type 6">Type 6</option>
        <option value="Type 7">Type 7</option>
      </select>

      <label htmlFor="text">Description:</label>
      <textarea
        className="user-text"
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateReview;
