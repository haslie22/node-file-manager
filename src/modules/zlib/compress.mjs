import { dirname } from 'path';
import { lstat } from 'fs/promises';

import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import compressFile from '../streams/compressFile.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import generateCompressedFilename from '../../utils/helpers/generateCompressedFilename.mjs';

import CustomError from '../../utils/CustomError.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const compress = async (filePaths) => {
  const sourceFilePath = processParams(filePaths[0]);
  const targetFilePath = processParams(filePaths[1]);
  const compressedFilename = generateCompressedFilename(sourceFilePath);

  const isDir = await lstat(targetFilePath).then(
    (stats) => stats.isDirectory(),
    () => false
  );
  const compressedFilePath = isDir ? compressedFilename : targetFilePath;
  const fileExists = await doesFileExist(compressedFilePath);

  const onEnd = () => {
    writeText(getMessage('FILE_COMPRESSED', sourceFilePath, compressedFilePath), colors.GREEN);
    showCurrentPath();
  };

  if (!fileExists) {
    try {
      await compressFile(sourceFilePath, compressedFilePath, onEnd);
    } catch (error) {
      return throwOperationFailed(error.message);
    }
  } else {
    new CustomError(errors.FILE_EXISTS).displayErrorMessage();
  }
};

export default compress;
