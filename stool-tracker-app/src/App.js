import React from "react";
import ShowReview from "./Components/ShowReview";
import { Link, Route } from "react-router-dom";
import CreateReview from "./Components/CreateReview";
import Stoolchart from "./pictures/stoolchart.png";
import { AiFillHome, AiFillEdit } from "react-icons/ai";
import { RiMentalHealthLine } from "react-icons/ri";
import "./App.css";
import Health from "./Components/Health";

function App() {
  return (
    <div>
      <div className="header">
        <header>
          <h1>Stool Tracker</h1>
        </header>

        <nav>
          <Link to="/">
            <AiFillHome size="2em" color="white" />
          </Link>

          <Link to="/create">
            <AiFillEdit size="2em" color="white" />
          </Link>

          <Link to="/health">
            <RiMentalHealthLine size="2em" color="white" />
          </Link>
        </nav>
      </div>

      <div className="homepage">
        <Route exact path="/">
          <ShowReview />
          <img className="poop-picture" src={Stoolchart} alt="stoolchart" />
        </Route>
      </div>

      <div className="writepage">
        <Route path="/create">
          <img className="poop-picture" src={Stoolchart} alt="stoolchart" />
          <CreateReview />
        </Route>
      </div>

      <div>
        <Route path="/health">
          <Health />
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
