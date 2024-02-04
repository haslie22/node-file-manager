import { resolve } from 'path';

import getCurrentPath from '../../utils/helpers/getCurrentPath.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';

import CustomError from '../../utils/CustomError.mjs';

import errors from '../../utils/constants/errors.mjs';

const cd = (targetDirPath) => {
  if (targetDirPath.length === 1) {
    const absolutePath = resolve(getCurrentPath(), targetDirPath[0]);

    try {
      process.chdir(absolutePath);
    } catch (error) {
      new CustomError(error.message).displayErrorMessage();
    }
  } else if (targetDirPath.length < 1) {
    new CustomError(errors.MISSING_PARAMS).displayErrorMessage();
  } else {
    new CustomError(errors.EXCESSIVE_PARAMS).displayErrorMessage();
  }

  showCurrentPath();
};

export default cd;
