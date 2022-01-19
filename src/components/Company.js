import { React } from 'react';
import CompanyForm from './CompanyForm/CompanyForm.Component';
import { useLocation, useParams } from 'react-router';

import './company.css';

const Company = (props) => {
  const location = useLocation();
  const params = useParams();
  const locationArr = location.pathname.split('/');
  var currentPath = '';
  if (locationArr.length > 0) {
    currentPath = locationArr[1];
  }
  return (
    <div className="company-container">
      <CompanyForm currentPath={currentPath} params={params} />
    </div>
  );
};

export default Company;
