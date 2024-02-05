import { rm } from 'fs/promises';

import throwOperationFailed from './throwOperationFailed.mjs';

const removeFile = async (absolutePath) => {
  try {
    await rm(absolutePath);
  } catch (error) {
    throwOperationFailed(error.message);
  }
};

export default removeFile;
