import { createBrotliDecompress } from 'zlib';

import readFile from './readFile.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import writeFile from './writeFile.mjs';

const decompressFile = async (sourceFilePath, destinationFilePath, onEnd) => {
  const onData = (writeStream) => {
    const decompressStream = createBrotliDecompress();
    const readStream = readFile(
      sourceFilePath,
      (chunk) => decompressStream.write(chunk),
      () => decompressStream.end()
    );

    decompressStream.pipe(writeStream);

    decompressStream.on('error', (error) => throwOperationFailed(error.message));
  };

  writeFile(destinationFilePath, onData, onEnd);
};

export default decompressFile;
