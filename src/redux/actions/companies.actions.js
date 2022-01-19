import { SET_COMPANIES } from '../actionTypes';
import {
  getCompaniesList,
  getCompanyDataByID,
  getCompanyDataByName,
} from '../../API/index.api';
import { setFormData } from './form.action';

const setCompanies = (companiesList) => (dispatch) => {
  dispatch({
    type: SET_COMPANIES,
    payload: companiesList,
  });
};

export const getCompanies = () => async (dispatch) => {
  const companiesList = await getCompaniesList();
  dispatch(setCompanies({ list: companiesList }));
};

export const getCompanyByID = (companyID) => async (dispatch, getState) => {
  const { form } = getState();
  const company = await getCompanyDataByID(companyID);
  form.formData = company;
  dispatch(setFormData(form));
};

export const getCompanyByName = (companyName) => async (dispatch) => {
  const companyList = await getCompanyDataByName(companyName);
  dispatch(setCompanies({ list: companyList }));
};
