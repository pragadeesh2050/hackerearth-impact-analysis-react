import React, { useState, useEffect } from "react";
import "./CandidateList.css";
import { withRouter } from "react-router";
import { fetchCandidates } from "./../actions/index";
import { connect } from "react-redux";

const CandidateList = ({ candidates, fetchCandidates, history }) => {
  const [candidateItems, setCandidateItems] = useState([]);

  const filterCandidates = (textToFilter) => {
    if (textToFilter) {
      const filteredItems = candidates.filter(({ name }) =>
        name.toLocaleLowerCase().includes(textToFilter.toLocaleLowerCase())
      );
      setCandidateItems(filteredItems);
    } else {
      setCandidateItems(candidates);
    }
  };

  const buildCandidateList = (candidateItems.length > 0 ? candidateItems : candidates).map(({ Image, name, id }) => {
    return (
      <li
        key={id}
        onClick={() => {
          history.push(`candidateDetail/${id}`);
        }}
      >
        <div className="card">
          <img
            src={Image}
            alt={name}
            style={{ width: "100%", height: "250px" }}
          />
          <div className="container">
            <h4>
              <b>{name}</b>
            </h4>
          </div>
        </div>
      </li>
    );
  });

  useEffect(() => {
    fetchCandidates();
  },[fetchCandidates]);

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Type here to search candidate"
        onChange={(e) => filterCandidates(e.target.value)}
      />

      <ul style={{ marginTop: "10px" }} className="flex-container wrap">
        {buildCandidateList}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { candidates: state.candidates };
};

export default connect(mapStateToProps, { fetchCandidates })(
  withRouter(CandidateList)
);
