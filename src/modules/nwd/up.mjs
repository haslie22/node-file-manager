import { resolve, dirname } from 'path';

import getCurrentPath from '../../utils/helpers/getCurrentPath.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import isSameDrive from '../../utils/helpers/isSameDrive.mjs';

import CustomError from '../../utils/CustomError.mjs';

import errors from '../../utils/constants/errors.mjs';

const up = (args) => {
  if (args.length) new CustomError(errors.EXCESSIVE_PARAMS).displayErrorMessage();

  const currentPath = getCurrentPath();
  const parentDir = dirname(currentPath);

  if (currentPath !== parentDir) {
    if (isSameDrive(currentPath, parentDir)) {
      try {
        process.chdir(parentDir);
      } catch (error) {
        new CustomError(error.message).displayErrorMessage();
      }
    } else {
      new CustomError(errors.ROOT_DIR.displayErrorMessage());
    }
  } else {
    new CustomError(errors.ROOT_DIR).displayErrorMessage();
  }

  showCurrentPath();
};

export default up;
