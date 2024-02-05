import { dirname } from 'path';

import getCurrentPath from '../../utils/helpers/getCurrentPath.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import isSameDrive from '../../utils/helpers/isSameDrive.mjs';

import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

import errors from '../../utils/constants/errors.mjs';

const up = (args) => {
  if (args.length) {
    return throwOperationFailed(errors.UNEXPECTED_PARAMS);
  }

  const currentPath = getCurrentPath();
  const parentDir = dirname(currentPath);

  if (currentPath !== parentDir) {
    if (isSameDrive(currentPath, parentDir)) {
      try {
        process.chdir(parentDir);
      } catch (error) {
        return throwOperationFailed(error.message);
      }
    } else {
      return throwOperationFailed(errors.ROOT_DIR);
    }
  } else {
    return throwOperationFailed(errors.ROOT_DIR);
  }

  showCurrentPath();
};

export default up;
