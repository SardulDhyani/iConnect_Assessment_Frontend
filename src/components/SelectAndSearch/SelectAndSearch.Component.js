import React from 'react';
import Select from 'react-select';

const STATES = [
  { label: 'Himachal Pradesh', field: 'state', value: 'Himachal Pradesh' },
  { label: 'Maharashtra', field: 'state', value: 'Maharashtra' },
  { label: 'Tamil Nadu', field: 'state', value: 'Tamil Nadu' },
  { label: 'Uttarakhand', field: 'state', value: 'Uttarakhand' },
];

const CITIES = [
  { label: 'Chamoli', field: 'city', value: 'Chamoli', state: 'Uttarakhand' },
  { label: 'Dehradun', field: 'city', value: 'Dehradun', state: 'Uttarakhand' },
  { label: 'Haridwar', field: 'city', value: 'Haridwar', state: 'Uttarakhand' },
  {
    label: 'Rishikesh',
    field: 'city',
    value: 'Rishikesh',
    state: 'Uttarakhand',
  },
  { label: 'Mumbai', field: 'city', value: 'Mumbai', state: 'Maharashtra' },
  { label: 'Nagpur', field: 'city', value: 'Nagpur', state: 'Maharashtra' },
  { label: 'Pune', field: 'city', value: 'Pune', state: 'Maharashtra' },
  { label: 'Thane', field: 'city', value: 'Thane', state: 'Maharashtra' },
  { label: 'Chennai', field: 'city', value: 'Chennai', state: 'Tamil Nadu' },
  {
    label: 'Coimbatore',
    field: 'city',
    value: 'Coimbatore',
    state: 'Tamil Nadu',
  },
  { label: 'Madurai', field: 'city', value: 'Madurai', state: 'Tamil Nadu' },
  { label: 'Salem', field: 'city', value: 'Salem', state: 'Tamil Nadu' },
  {
    label: 'Dharamsala',
    field: 'city',
    value: 'Dharamsala',
    state: 'Himachal Pradesh',
  },
  { label: 'Mandi', field: 'city', value: 'Mandi', state: 'Himachal Pradesh' },
  {
    label: 'Shimla',
    field: 'city',
    value: 'Shimla',
    state: 'Himachal Pradesh',
  },
  { label: 'Solan', field: 'city', value: 'Solan', state: 'Himachal Pradesh' },
];

const SelectAndSearch = (props) => {
  const cititesArr = [];
  if (!props.isState) {
    CITIES.forEach((elem) => {
      if (elem.state.trim().toString() === props.stateName.trim().toString())
        cititesArr.push(elem);
    });
  }

  return (
    <>
      {props.isState ? (
        <Select options={STATES} {...props} />
      ) : (
        <Select options={cititesArr} {...props} />
      )}
    </>
  );
};

export default SelectAndSearch;
