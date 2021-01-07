const RejectedListReducer = (state = [], action) => {
    switch (action.type) {
      case "REJECTED":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default RejectedListReducer;
  