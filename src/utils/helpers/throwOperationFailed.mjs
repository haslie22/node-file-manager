import CustomError from '../CustomError.mjs';
import errors from '../constants/errors.mjs';

const throwOperationFailed = (message) => {
  return new CustomError(`${errors.OPERATION_FAILED}\n${message}`).displayErrorMessage();
};

export default throwOperationFailed;
