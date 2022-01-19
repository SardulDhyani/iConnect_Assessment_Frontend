import { GET_COMPANIES, LOAD_COMPANIES, SET_COMPANIES } from '../actionTypes';

export const getCompanies = () => (dispatch) => {
  dispatch({ type: SET_COMPANIES, payload: { abc: 'abc' } });
};
