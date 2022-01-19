import { React } from 'react';
import { Button } from '@mui/material';

const ButtonComponent = (props) => {
  return <Button {...props}>{props.buttontext}</Button>;
};

export default ButtonComponent;
