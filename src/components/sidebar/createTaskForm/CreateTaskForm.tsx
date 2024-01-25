import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid red"
      alignItems="flex-start"
      px={4}
      my={6}
    >
      <Typography variant="h6" component="h2">
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        {/* Task date */}
        {/* Task status */}
        {/* Task Priority */}
      </Stack>
    </Box>
  );
};