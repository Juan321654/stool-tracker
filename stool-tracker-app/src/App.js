import React from "react";
import ShowReview from "./Components/ShowReview";
import { Link, Route } from "react-router-dom";
import CreateReview from "./Components/CreateReview";
// import stoolchart from "./pictures/stoolchart";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Stool Tracker</h1>
      </header>
      <nav>
        <button className="home-button">
          <Link to="/">Home</Link>
        </button>

        <button>
          <Link to="/create">Write a Review</Link>
        </button>
      </nav>
      <div>
        <Route exact path="/">
          <ShowReview />
          {/* <img src={stoolchart} alt="stoolchart" /> */}
        </Route>
        <Route path="/create">
          <CreateReview />
        </Route>
      </div>

      {/* <CreateReview /> */}
    </div>
  );
}

export default App;

//read data in postman
//check that works and get request
//set up an input field
//trey to do a post request.
