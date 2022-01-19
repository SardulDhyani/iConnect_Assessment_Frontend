import axios from 'axios';
import fd from 'form-data';
import { API_URL } from './URL.api';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export const getCompaniesList = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/companies`);
    return data.companiesList;
  } catch (error) {
    console.log(error);
    return { error: 'error' };
  }
};

export const getCompanyDataByID = async (companyID) => {
  try {
    const { data } = await axios.get(`${API_URL}/company/${companyID}`);
    return data;
  } catch (error) {
    return { error: 'error' };
  }
};

export const getCompanyDataByName = async (companyName = 'null') => {
  try {
    const { data } = await axios.get(
      `${API_URL}/company/search-name/${companyName}`
    );
    return data;
  } catch (error) {
    return { error: 'error' };
  }
};

export const putEditCompany = async (formData) => {
  try {
    const newFD = new fd();
    if (formData.logo_image) newFD.append('image', formData.logo_image);
    else newFD.append('logoLink', formData.logoLink);

    newFD.append('_id', formData._id);
    newFD.append('companyName', formData.companyName);
    newFD.append('companyDescription', formData.companyDescription);
    newFD.append('contactEmail', formData.contactEmail);
    newFD.append('contactNumber', formData.contactNumber);
    newFD.append('state', formData.state);
    newFD.append('city', formData.city);

    const response = await axios.put(`${API_URL}/edit-company`, newFD);
    return response;
  } catch (error) {
    console.log(error);
    return { error: 'error' };
  }
};

export const postAddCompany = async (formData) => {
  try {
    const newFD = new fd();
    newFD.append('image', formData.logo_image);
    newFD.append('companyName', formData.companyName);
    newFD.append('companyDescription', formData.companyDescription);
    newFD.append('contactEmail', formData.contactEmail);
    newFD.append('contactNumber', formData.contactNumber);
    newFD.append('state', formData.state);
    newFD.append('city', formData.city);

    const response = await axios.post(`${API_URL}/create-company`, newFD);
    return response;
  } catch (error) {
    console.log(error);
    return { error: 'error' };
  }
};
