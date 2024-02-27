import { createWriteStream } from 'fs';

import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

const writeFile = (writeFilePath, onData, onEnd) => {
  const writeStream = createWriteStream(writeFilePath);

  writeStream.on('finish', () => onEnd());
  writeStream.on('error', (error) => throwOperationFailed(error.message));

  onData(writeStream);

  return writeStream;
};

export default writeFile;
