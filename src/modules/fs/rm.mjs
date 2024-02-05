import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import removeFile from '../../utils/helpers/removeFile.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const rm = async (targetFilePath) => {
  const absolutePath = processParams(targetFilePath);
  const fileExists = await doesFileExist(absolutePath);

  if (fileExists) {
    await removeFile(absolutePath);
    writeText(getMessage('FILE_DELETED', absolutePath), colors.GREEN);
    showCurrentPath();
  } else {
    return throwOperationFailed(errors.FILE_NOT_FOUND);
  }
};

export default rm;
