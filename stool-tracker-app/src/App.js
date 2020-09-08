import React from "react";
import ShowReview from "./Components/ShowReview";
import { Link, Route } from "react-router-dom";
import CreateReview from "./Components/CreateReview";
import Stoolchart from "./pictures/stoolchart.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header-w-pic">
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
        <img className="poop-picture" src={Stoolchart} alt="stoolchart" />
      </div>

      <div className="comment-section">
        <Route exact path="/">
          <ShowReview />
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
