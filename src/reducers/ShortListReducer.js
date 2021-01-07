const ShortListReducer = (state = [], action) => {
  switch (action.type) {
    case "SHORTLIST":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ShortListReducer;
