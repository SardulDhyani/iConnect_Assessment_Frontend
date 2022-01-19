import { SET_FORM_DATA, CLEAR_FORM_DATA } from '../actionTypes';

const INITIAL_STATE = {
  formData: {
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    contactNumber: '',
    city: '',
    state: '',
    logo_image: '',
  },
  formErrors: {
    contactEmail: null,
    contactNumber: null,
  },
  alertErrors: [],
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, ...action.payload };
    case CLEAR_FORM_DATA:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default formReducer;
