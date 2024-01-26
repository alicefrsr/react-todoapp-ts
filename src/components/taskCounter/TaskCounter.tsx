import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../sidebar/createTaskForm/enums/Status';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 0, status = Status.completed } = props;
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
            borderColor: 'warning.light',
          }}
        >
          <Typography color="#fff" variant="h5">
            10
          </Typography>
        </Avatar>
        <Typography color="#fff" fontWeight="bold" fontSize="20px" variant="h5">
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
