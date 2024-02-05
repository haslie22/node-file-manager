import routeArgs from '../routeArgs.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

import errors from '../../utils/constants/errors.mjs';

const getSystemInfo = (params) => {
  if (params.length !== 1) {
    return throwOperationFailed(errors.MISSING_PARAMS);
  }

  const osCommand = params[0];
  const normalizedCommand = osCommand.replace(/-/g, '').toLowerCase();

  if (normalizedCommand in routeArgs) {
    routeArgs[normalizedCommand]();
    showCurrentPath();
  } else {
    throwOperationFailed(errors.UNEXPECTED_PARAMS);
  }
};

export default getSystemInfo;
