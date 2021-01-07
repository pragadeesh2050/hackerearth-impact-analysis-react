const CandidateReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_CANDIDATES":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default CandidateReducer;
  