import { combineReducers } from "redux";
import CandidateReducer from "./CandidateReducer";
import RejectedListReducer from "./RejectListReducer";
import ShortListReducer from "./ShortListReducer";

export default combineReducers({ candidates: CandidateReducer, shortListed: ShortListReducer, rejected: RejectedListReducer });
