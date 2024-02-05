import readFile from '../../modules/streams/readFile.mjs';
import writeFile from '../../modules/streams/writeFile.mjs';
import showCurrentPath from './showCurrentPath.mjs';

const copyFile = async (sourceFilePath, targetFilePath, onEnd) => {
  const onData = (writeStream) => {
    const readStream = readFile(
      sourceFilePath,
      (chunk) => writeStream.write(chunk),
      () => writeStream.end()
    );
    readStream.on('end', () => onEnd());
  };

  writeFile(targetFilePath, onData, () => showCurrentPath());
};

export default copyFile;
