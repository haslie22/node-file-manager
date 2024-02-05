import { writeFile } from 'fs/promises';

import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';

import CustomError from '../../utils/CustomError.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const add = async (newFileName) => {
  const absolutePath = processParams(newFileName);
  let fileExists = await doesFileExist(absolutePath);

  if (!fileExists) {
    try {
      await writeFile(absolutePath, '');
      writeText(getMessage('FILE_CREATED', newFileName), colors.GREEN);
    } catch (error) {
      return throwOperationFailed(error.message);
    }

    showCurrentPath();
  } else {
    new CustomError(errors.FILE_EXISTS).displayErrorMessage();
  }
};

export default add;
