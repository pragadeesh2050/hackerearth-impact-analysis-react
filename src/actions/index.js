import api from "../api";

export const fetchCandidates = () => {
  return async (dispatch) => {
    const candidateList = await api.get("/users49b8675.json");
    dispatch({ type: "FETCH_CANDIDATES", payload: candidateList.data });
  };
};

export const shortListCandidate = (idToShortList) => (dispatch, getState) => {
  const { candidates } = getState();
  dispatch({
    type: "SHORTLIST",
    payload: candidates.find((x) => x.id === idToShortList),
  });
};

export const rejectCandidate = (idToReject) => (dispatch, getState) => {
  const { candidates } = getState();
  dispatch({
    type: "REJECTED",
    payload: candidates.find((x) => x.id === idToReject),
  });
};
