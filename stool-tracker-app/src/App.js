import React from "react";
import ShowReview from "./Components/ShowReview";
import { Link, Route } from "react-router-dom";
import CreateReview from "./Components/CreateReview";
import stoolChart from "./pictures/stool-chart.png";
import {
  AiFillHome,
  AiFillEdit,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
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
          <img className="poop-picture" src={stoolChart} alt="stoolchart" />
        </Route>
      </div>

      <div className="writepage">
        <Route path="/create">
          <img className="poop-picture" src={stoolChart} alt="stoolchart" />
          <CreateReview />
        </Route>
      </div>

      <div>
        <Route path="/health">
          <Health />
        </Route>
      </div>

      <div className="footers">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Juan321654"
        >
          <AiFillGithub size="2em" color="Chocolate" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/juan321654/"
        >
          <AiOutlineFacebook size="2em" color="Chocolate" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/juancamachofierro/"
        >
          <AiOutlineLinkedin size="2em" color="Chocolate" />
        </a>
      </div>
    </div>
  );
}

export default App;

//read data in postman
//check that works and get request
//set up an input field
//trey to do a post request.
