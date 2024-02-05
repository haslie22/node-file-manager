import { createReadStream } from 'fs';

import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

const readFile = (readFilePath, onData, onEnd) => {
  const readStream = createReadStream(readFilePath);

  readStream.on('data', (chunk) => onData(chunk));
  readStream.on('end', () => onEnd());
  readStream.on('error', (error) => throwOperationFailed(error.message));

  return readStream;
};

export default readFile;
