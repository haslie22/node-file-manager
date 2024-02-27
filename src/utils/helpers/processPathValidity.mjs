import throwOperationFailed from './throwOperationFailed.mjs';

import errors from '../constants/errors.mjs';

const processPathValidity = (paths) => {
  for (const path of paths) {
    if (!path || !path.length) {
      throwOperationFailed(errors.MISSING_PARAMS);
      return false;
    }
  }
  return true;
};

export default processPathValidity;
