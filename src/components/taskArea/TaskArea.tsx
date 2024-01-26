import { Grid, Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/TaskCounter';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box>
        <h2>{format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        {/* task counters */}
        <Grid
          item
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        {/* tasks list */}
        <Grid item display="flex" flexDirection="column" xs={10} mb={8}>
          <Box>Task will be here</Box>
          <Box>Task will be here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
