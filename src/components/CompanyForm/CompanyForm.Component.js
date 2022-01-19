import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography, Input } from '@mui/material';
import validator from 'validator';

import {
  setFormData,
  sendFormData,
  sendEditFormData,
  clearFormData,
} from '../../redux/actions/form.action';
import { getCompanyByID } from '../../redux/actions/companies.actions';

import ErrorMessage from '../ErrorMessage/ErrorMessage.Component';
import TextBox from '../TextBox/TextBox.component';
import SelectAndSearch from '../SelectAndSearch/SelectAndSearch.Component';
import ButtonComponent from '../ButtonComponent/ButtonComponent.Component';

const CompanyForm = (props) => {
  const formReduxData = useSelector((state) => state.form);
  const { formData, formErrors, alertErrors } = formReduxData;

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.currentPath === 'edit')
      dispatch(getCompanyByID(props.params.companyID));
    else dispatch(clearFormData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormChange = (e) => {
    if (e.field) {
      const fData = formReduxData;
      fData.formData[e.field] = e.value;
      dispatch(setFormData(fData));
    }
    if (e.target) {
      if (e.target.id === 'logo_image') {
        const fData = formReduxData;
        fData.formData[e.target.id] = e.target.files[0];
        dispatch(setFormData(fData));
      } else {
        const fData = formReduxData;
        fData.formData[e.target.id] = e.target.value;
        handleformErrors(e);
        dispatch(setFormData(fData));
      }
    }
  };

  const handleformErrors = (e) => {
    if (e.target.id === 'contactEmail') {
      const fData = formReduxData;
      if (!validator.isEmail(e.target.value)) {
        fData.formErrors[e.target.id] = 'Please enter a valid e-mail';
        dispatch(setFormData(fData));
      } else {
        fData.formErrors[e.target.id] = null;
        dispatch(setFormData(fData));
      }
    }

    if (e.target.id === 'contactNumber') {
      const fData = formReduxData;
      if (!validator.isNumeric(e.target.value)) {
        fData.formErrors[e.target.id] = 'Please enter a valid Contact Number';
        dispatch(setFormData(fData));
      } else {
        fData.formErrors[e.target.id] = null;
        dispatch(setFormData(fData));
      }
    }
  };

  const handleFormSubmit = (e) => {
    if (
      !formData.companyName ||
      !formData.companyDescription ||
      !formData.contactEmail ||
      !formData.contactNumber ||
      !formData.state ||
      !formData.city
    ) {
      const fData = formReduxData;
      fData.alertErrors.push('Please Fill all the fields');
      dispatch(setFormData(fData));
    } else {
      if (formData._id) dispatch(sendEditFormData(formData));
      else dispatch(sendFormData(formData));
      const fData = formReduxData;
      fData.alertErrors = [];
      dispatch(setFormData(fData));
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        {alertErrors.length > 0 ? (
          <ErrorMessage errorArr={alertErrors} severity="error" />
        ) : null}
        <Grid container spacing={1} style={{ marginTop: 10 }}>
          <Grid item md={12} xs={12}>
            <TextBox
              id="companyName"
              value={formData.companyName || ''}
              label="Company Name"
              onChange={handleFormChange}
              error={formErrors.companyName || false}
              helperText={
                formErrors.companyName
                  ? 'Please Enter Valid Company Name'
                  : null
              }
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextBox
              id="companyDescription"
              value={formData.companyDescription || ''}
              label="Company Description"
              onChange={handleFormChange}
              error={formErrors.companyDescription || false}
              helperText={
                formErrors.companyDescription
                  ? 'Please Enter Valid Company Description'
                  : null
              }
              multiline
              rows={5}
              maxRows={10}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextBox
              id="contactEmail"
              value={formData.contactEmail || ''}
              label="Email"
              onChange={handleFormChange}
              error={formErrors.contactEmail || false}
              helperText={
                formErrors.contactEmail ? formErrors.contactEmail : null
              }
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextBox
              id="contactNumber"
              value={formData.contactNumber || ''}
              label="Contact Number"
              onChange={handleFormChange}
              error={formErrors.contactNumber || false}
              helperText={
                formErrors.contactNumber
                  ? 'Please Enter Valid Contact Number'
                  : null
              }
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <SelectAndSearch
              isState
              placeholder="Select State"
              id="state"
              value={
                formData.state
                  ? {
                      label: formData.state || '',
                      field: 'state',
                      value: formData.state || '',
                    }
                  : null
              }
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <SelectAndSearch
              placeholder={
                formData.state ? 'Select City' : 'Please Select State First*'
              }
              id="city"
              stateName={formData.state || ''}
              value={
                formData.city
                  ? {
                      label: formData.city || '',
                      field: 'city',
                      value: formData.city || '',
                      state: formData.state || '',
                    }
                  : null
              }
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography> Please Select Company Logo</Typography>
            <Input
              type="file"
              id="logo_image"
              name="logo_image"
              fullWidth
              onChange={handleFormChange}
            />
          </Grid>
          {props.currentPath === 'edit' ? (
            <Grid item xs={12}>
              <Typography>Previous Company Logo</Typography>
              <img
                src={`http://localhost:8080/${formData.logoLink}`}
                alt="Unable to Display"
                style={{ height: 100 }}
              />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <ButtonComponent
              onClick={handleFormSubmit}
              buttontext={
                props.currentPath === 'edit' ? 'Edit Company' : 'Add Company'
              }
              variant="outlined"
              size="sm"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CompanyForm;
