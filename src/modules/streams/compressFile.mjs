import { createBrotliCompress } from 'zlib';

import readFile from './readFile.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import writeFile from './writeFile.mjs';

const compressFile = async (sourceFilePath, destinationFilePath, onEnd) => {
  console.log('🚀 ~ compressFile ~ sourceFilePath:', sourceFilePath);
  const onData = (writeStream) => {
    const compressStream = createBrotliCompress();
    const readStream = readFile(
      sourceFilePath,
      (chunk) => compressStream.write(chunk),
      () => compressStream.end()
    );

    compressStream.pipe(writeStream);

    compressStream.on('error', (error) => throwOperationFailed(error.message));
  };

  writeFile(destinationFilePath, onData, onEnd);
};

export default compressFile;
