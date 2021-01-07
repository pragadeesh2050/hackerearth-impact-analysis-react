import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { shortListCandidate, rejectCandidate } from "./../actions/index";
import { withRouter } from "react-router";

const CandidateDetail = ({
  candidates,
  shortListCandidate,
  rejectCandidate,
  history,
}) => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(candidates.find((x) => x.id === id));
  }, [id, candidates]);

  return (
    <div className="card" style={{ width: "95%", margin: "10px" }}>
      <img
        src={user.Image}
        alt={user.name}
        style={{ width: "100%", height: "350px" }}
      />
      <div className="container">
        <h4>
          <b>{user.name}</b>
        </h4>
      </div>

      <div>
        <button
          className="button buttonBlue"
          onClick={(e) => {
            shortListCandidate(id);
            history.push("/shortListed");
          }}
        >
          ShortListed
        </button>
        <button
          className="button buttonRed"
          onClick={(e) => {
            rejectCandidate(id);
            history.push("/rejected");
          }}
        >
          Rejected
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { candidates: state.candidates };
};

export default connect(mapStateToProps, {
  shortListCandidate,
  rejectCandidate,
})(withRouter(CandidateDetail));
