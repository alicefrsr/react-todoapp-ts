import { Priority } from '../../../sidebar/createTaskForm/enums/Priority';

// fn will return the color (string)
export const priorityBorderColor = (priority: string): string | undefined => {
  switch (priority) {
    case Priority.high:
      return 'error.light';
    case Priority.normal:
      return 'grey.600';
    case Priority.low:
      return 'info.light';
    default:
      return 'grey.900';
  }
};
