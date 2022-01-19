import React from 'react';
import { Typography } from '@mui/material';

import './pageHeader.css';

const PageHeader = (props) => {
  return (
    <div className="pageHeader-container">
      <Typography variant="h3" color="primary">
        {props.heading}
      </Typography>
    </div>
  );
};

export default PageHeader;
