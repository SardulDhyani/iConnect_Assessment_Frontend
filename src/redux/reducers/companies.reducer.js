import { GET_COMPANIES, SET_COMPANIES } from '../actionTypes';

const INITIAL_STATE = {
  list: [],
};

const companiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default companiesReducer;
