import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

import { Status } from '../../../sidebar/createTaskForm/enums/Status';

// fn will return the color  (string)
export const counterLabel = (
  status: TaskCounterStatusType,
): string | undefined => {
  switch (status) {
    case Status.todo:
      return 'To do';

    case Status.inProgress:
      return 'In progress';

    case Status.completed:
      return 'Completed';
  }
};
