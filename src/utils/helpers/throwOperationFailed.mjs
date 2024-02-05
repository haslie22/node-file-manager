import showCurrentPath from './showCurrentPath.mjs';

import CustomError from '../CustomError.mjs';

import errors from '../constants/errors.mjs';

const throwOperationFailed = (message) => {
  new CustomError(`${errors.OPERATION_FAILED}\n${message}`).displayErrorMessage();
  showCurrentPath();
};

export default throwOperationFailed;
