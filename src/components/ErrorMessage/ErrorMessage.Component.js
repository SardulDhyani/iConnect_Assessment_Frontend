import { React } from 'react';
import { Alert, Typography } from '@mui/material';

const ErrorMessage = (props) => {
  return (
    <>
      <Alert {...props}>
        {props.errorArr.map((element, i) => {
          return <Typography key={i}>{element}</Typography>;
        })}
      </Alert>
    </>
  );
};

export default ErrorMessage;
