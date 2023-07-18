import { IPrizmAstCodeTask } from '@prizm-ui/ast/code';
import { PrizmInputSelectCodeTasks } from './input-select.task';
import { PrizmInputMultiSelectCodeTasks } from './input-multi-select.task';
import { PrizmInputLayoutDateCodeTasks } from './input-date.task';
import { PrizmInputLayoutDateTimeCodeTasks } from './input-date-time.task';

export const PRIZM_UPDATE_V2_CODE_TASKS: IPrizmAstCodeTask[] = [
  ...PrizmInputSelectCodeTasks,
  ...PrizmInputMultiSelectCodeTasks,
  ...PrizmInputLayoutDateCodeTasks,
  ...PrizmInputLayoutDateTimeCodeTasks,
];
