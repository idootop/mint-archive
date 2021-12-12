import { Types } from '../utils/types';

export const getDisplayName = (
  type: Types | string = 'other',
  displayTypeNames: Record<string, string> = {},
): string => {
  return displayTypeNames[type] ?? type;
};
