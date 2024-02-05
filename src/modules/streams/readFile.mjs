import { createReadStream } from 'fs';

import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

import CustomError from '../../utils/CustomError.mjs';

import errors from '../../utils/constants/errors.mjs';

const readFile = (readFilePath, onData, onEnd) => {
  const readStream = createReadStream(readFilePath);

  readStream.on('data', (chunk) => onData(chunk));
  readStream.on('end', () => onEnd());
  readStream.on('error', (error) => throwOperationFailed(error.message));
};

export default readFile;
