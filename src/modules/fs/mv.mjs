import { resolve } from 'path';

import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import copyFile from '../../utils/helpers/copyFile.mjs';
import removeFile from '../../utils/helpers/removeFile.mjs';

import errors from '../../utils/constants/errors.mjs';
import colors from '../../utils/constants/colors.mjs';

const mv = async (filePaths) => {
  const sourceFilePath = processParams(filePaths[0]);
  const targetDirPath = processParams(filePaths[1]);

  const fileExists = await doesFileExist(sourceFilePath);
  const folderExists = await doesFileExist(targetDirPath);

  if (fileExists && folderExists) {
    const fileName = sourceFilePath.split('/').pop();
    const targetFilePath = resolve(targetDirPath, fileName);

    const copyExists = await doesFileExist(targetFilePath);
    if (copyExists) {
      return throwOperationFailed(errors.FILE_EXISTS);
    }

    const onEnd = () => {
      writeText(getMessage('FILE_MOVED', sourceFilePath, targetFilePath), colors.GREEN);
    };

    await copyFile(sourceFilePath, targetFilePath, onEnd);
    await removeFile(sourceFilePath);
  } else {
    return throwOperationFailed(errors.FILE_NOT_FOUND);
  }
};

export default mv;
