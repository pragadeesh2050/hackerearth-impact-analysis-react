import React from "react";
import { connect } from "react-redux";

const ShortListed = ({ shortListed }) => {
  const buildCandidateList = shortListed.map(({ Image, name, id }) => {
    return (
      <li key={id}>
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

  return (
    <div>
      <h1>ShortListed</h1>
      <ul style={{ marginTop: "10px" }} className="flex-container wrap">
        {buildCandidateList}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {shortListed: state.shortListed};
};

export default connect(mapStateToProps)(ShortListed);
