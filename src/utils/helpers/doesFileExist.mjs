import { access, constants } from 'fs/promises';

import CustomError from '../CustomError.mjs';

import errors from '../constants/errors.mjs';

const doesFileExist = async (filePath) => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export default doesFileExist;
