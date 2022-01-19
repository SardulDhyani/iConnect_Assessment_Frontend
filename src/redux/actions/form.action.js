import { SET_FORM_DATA, CLEAR_FORM_DATA } from '../actionTypes';
import { postAddCompany, putEditCompany } from '../../API/index.api';

import history from '../../components/routes/history.routes';

export const setFormData = (formData) => async (dispatch) => {
  dispatch({
    type: SET_FORM_DATA,
    payload: formData,
  });
};

export const clearFormData = () => (dispatch) => {
  dispatch({ type: CLEAR_FORM_DATA });
};

export const sendFormData = (formData) => async (dispatch, getState) => {
  console.log(formData);
  const response = await postAddCompany(formData);
  if (response.data.company) {
    dispatch(setFormData({ formData: response.data.company, alertErrors: [] }));
    history.push('/');
  }
  if (response.data.errors)
    dispatch(setFormData({ alertErrors: response.data.errors }));
};

export const sendEditFormData = (formData) => async (dispatch, getState) => {
  const response = await putEditCompany(formData);
  if (response.data.company) {
    dispatch(setFormData({ formData: response.data.company, alertErrors: [] }));
    history.push('/');
  }
  if (response.data.errors)
    dispatch(setFormData({ alertErrors: response.data.errors }));
};
