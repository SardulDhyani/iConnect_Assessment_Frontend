import { React, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { getCompanyByName } from '../../redux/actions/companies.actions';

import './searchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');

  const handleFormChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSearchOnClick = (e) => {
    if (companyName === '') dispatch(getCompanyByName('null'));
    else dispatch(getCompanyByName(companyName));
  };

  return (
    <>
      <div className="searchBox-container">
        <TextField
          id="company Name"
          label="Search Company Name"
          variant="outlined"
          value={companyName}
          onChange={handleFormChange}
        />
        <Button variant="outlined" onClick={handleSearchOnClick}>
          <SearchOutlinedIcon color="primary" />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
