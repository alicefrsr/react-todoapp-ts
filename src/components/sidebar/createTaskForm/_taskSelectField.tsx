import React, { FC, ReactElement } from 'react';

import { ISelectField } from './interfaces/ISelectField';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = '',
    label = 'selectBox',
    name = 'selectBox',
    items = [{ value: '', label: 'Add items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      {/* <InputLabel id="status">Status</InputLabel> */}
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        // id="status-select"
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, i) => (
          <MenuItem key={item.value + i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
