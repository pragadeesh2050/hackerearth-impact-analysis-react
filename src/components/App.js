import React from "react";
import "./App.css";
import CandidateList from "./CandidateList";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CandidateDetail from "./CandidateDetail";
import RejectedList from "./RejectedList";
import ShortListed from "./ShortListed";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <ul className="navBar">
            <li>
              <Link to="/">Candidate List</Link>
              <Link to="/shortListed">ShortListed</Link>
              <Link to="/rejected">Rejected</Link>
            </li>
          </ul>
          <Route path="/" exact component={CandidateList}></Route>
          <Route path="/candidateDetail/:id" children={<CandidateDetail />}></Route>
          <Route path="/shortListed" children={<ShortListed/>}></Route>
          <Route path="/rejected" children={<RejectedList />}></Route>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
