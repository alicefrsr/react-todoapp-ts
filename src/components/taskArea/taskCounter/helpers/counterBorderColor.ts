import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

import { Status } from '../../../sidebar/createTaskForm/enums/Status';

// fn will return the color  (string)
export const counterBorderColor = (
  status: TaskCounterStatusType,
): string | undefined => {
  switch (status) {
    case Status.todo:
      return 'error.light';

    case Status.inProgress:
      return 'warning.light';

    case Status.completed:
      return 'success.light';
  }
};
