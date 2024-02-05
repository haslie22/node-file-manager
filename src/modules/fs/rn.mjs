import { rename } from 'fs/promises';

import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';

import colors from '../../utils/constants/colors.mjs';

const rn = async (filePaths) => {
  const oldFilePath = processParams(filePaths[0]);
  const newFileName = processParams(filePaths[1]);

  let fileExists = await doesFileExist(oldFilePath);

  if (fileExists) {
    const newFilePath = `${newFileName}`;

    try {
      await rename(oldFilePath, newFilePath);
      writeText(getMessage('FILE_RENAMED', oldFilePath), colors.GREEN);
    } catch (error) {
      throwOperationFailed(error.message);
    }

    showCurrentPath();
  } else {
    return throwOperationFailed(`File not found: ${oldFilePath}`);
  }
};

export default rn;
