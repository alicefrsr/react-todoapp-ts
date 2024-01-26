import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../../sidebar/createTaskForm/enums/Status';
import { counterBorderColor } from './helpers/counterBorderColor';
import { counterLabel } from './helpers/counterLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 0, status = Status.inProgress } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '3px solid',
            width: '74px',
            height: '74px',
            marginBottom: '16px',
            borderColor: `${counterBorderColor(status)}`,
          }}
        >
          <Typography color="#fff" variant="h5">
            {count}
          </Typography>
        </Avatar>
        <Typography color="#fff" fontWeight="bold" fontSize="20px" variant="h5">
          {counterLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
