import { unlink } from 'fs/promises';

import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const rm = async (targetFilePath) => {
  const absolutePath = processParams(targetFilePath);
  const fileExists = await doesFileExist(absolutePath);

  if (fileExists) {
    try {
      await unlink(absolutePath);
      writeText(getMessage('FILE_DELETED', absolutePath), colors.GREEN);
    } catch (error) {
      throwOperationFailed(error.message);
    }

    showCurrentPath();
  } else {
    return throwOperationFailed(errors.FILE_NOT_FOUND);
  }
};

export default rm;
