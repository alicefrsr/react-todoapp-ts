import React, { FC, ReactElement } from 'react';

import { ITextField } from './interfaces/ITextField';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import PropTypes from 'prop-types';

export const TaskSelectField: FC<ITextField> = (props): ReactElement => {
  //   const {} = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status-select"
        value=""
        label="status"
        name="status"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
