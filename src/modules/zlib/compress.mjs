import { lstat } from 'fs/promises';
import { resolve } from 'path';

import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import compressFile from '../streams/compressFile.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import generateCompressedFilename from '../../utils/helpers/generateCompressedFilename.mjs';
import processPathValidity from '../../utils/helpers/processPathValidity.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const compress = async (filePaths) => {
  const sourceFilePath = processParams(filePaths[0]);
  const targetFilePath = processParams(filePaths[1]);
  const arePathsValid = processPathValidity([sourceFilePath, targetFilePath]);

  if (!arePathsValid) return;

  const compressedFileName = generateCompressedFilename(sourceFilePath);
  const isDir = await lstat(targetFilePath).then(
    (stats) => stats.isDirectory(),
    () => false
  );

  const compressedFilePath = isDir ? resolve(targetFilePath, compressedFileName) : targetFilePath;
  const fileExists = await doesFileExist(compressedFilePath);

  const onEnd = () => {
    writeText(getMessage('FILE_COMPRESSED', sourceFilePath), colors.GREEN);
    showCurrentPath();
  };

  if (!fileExists) {
    try {
      await compressFile(sourceFilePath, compressedFilePath, onEnd);
    } catch (error) {
      return throwOperationFailed(error.message);
    }
  } else {
    return throwOperationFailed(errors.FILE_EXISTS);
  }
};

export default compress;
