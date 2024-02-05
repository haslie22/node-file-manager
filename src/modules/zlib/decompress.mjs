import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import decompressFile from '../streams/decompressFile.mjs';
import processPathValidity from '../../utils/helpers/processPathValidity.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const decompress = async (filePaths) => {
  const sourceFilePath = processParams(filePaths[0]);
  const targetFilePath = processParams(filePaths[1]);
  const fileExists = await doesFileExist(targetFilePath);
  const arePathsValid = processPathValidity([sourceFilePath, targetFilePath]);

  if (!arePathsValid) return;

  const onEnd = () => {
    writeText(getMessage('FILE_DECOMPRESSED', sourceFilePath, targetFilePath), colors.GREEN);
    showCurrentPath();
  };

  if (!fileExists) {
    try {
      await decompressFile(sourceFilePath, targetFilePath, onEnd);
    } catch (error) {
      return throwOperationFailed(error.message);
    }
  } else {
    return throwOperationFailed(errors.FILE_EXISTS);
  }
};

export default decompress;
