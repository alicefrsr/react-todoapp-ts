import React, { FC, ReactElement } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    disabled = false,
    value = new Date(),
    onChange = (date) => console.log(date),
  } = props;

  //   const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
