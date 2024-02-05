import { rename } from 'fs/promises';

import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processPathValidity from '../../utils/helpers/processPathValidity.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const rn = async (filePaths) => {
  const oldFilePath = processParams(filePaths[0]);
  const newFileName = processParams(filePaths[1]);
  const arePathsValid = processPathValidity([oldFilePath, newFileName]);

  if (!arePathsValid) return;

  let fileExists = await doesFileExist(oldFilePath);

  if (fileExists) {
    const newFilePath = `${newFileName}`;

    try {
      await rename(oldFilePath, newFilePath);
      writeText(getMessage('FILE_RENAMED', oldFilePath), colors.GREEN);
    } catch (error) {
      return throwOperationFailed(error.message);
    }

    showCurrentPath();
  } else {
    return throwOperationFailed(errors.FILE_NOT_FOUND);
  }
};

export default rn;
