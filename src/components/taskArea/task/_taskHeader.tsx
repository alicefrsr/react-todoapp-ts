import React, { FC, ReactElement } from 'react';
import { Typography, Box, Chip } from '@mui/material';
import { format } from 'date-fns';

import { ITaskHeader } from './interfaces/ITaskHeader';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'default title', date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PP')} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
