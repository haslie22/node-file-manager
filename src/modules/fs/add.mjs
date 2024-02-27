import { writeFile } from 'fs/promises';

import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import processPathValidity from '../../utils/helpers/processPathValidity.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const add = async (newFileName) => {
  const absolutePath = processParams(newFileName);
  const fileExists = await doesFileExist(absolutePath);
  const isPathValid = processPathValidity([absolutePath]);

  if (!isPathValid) return;

  if (!fileExists) {
    try {
      await writeFile(absolutePath, '');
      writeText(getMessage('FILE_CREATED', newFileName), colors.GREEN);
    } catch (error) {
      return throwOperationFailed(error.message);
    }

    showCurrentPath();
  } else {
    return throwOperationFailed(errors.FILE_EXISTS);
  }
};

export default add;
