import { createHash } from 'crypto';

import processParams from '../../utils/helpers/processParams.mjs';
import doesFileExist from '../../utils/helpers/doesFileExist.mjs';
import readFile from '../streams/readFile.mjs';
import writeText from '../../utils/helpers/writeText.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processPathValidity from '../../utils/helpers/processPathValidity.mjs';

import colors from '../../utils/constants/colors.mjs';
import errors from '../../utils/constants/errors.mjs';

const hash = async (sourceFilePath) => {
  const targetFilePath = processParams(sourceFilePath[0]);
  const fileExists = await doesFileExist(targetFilePath);
  const isPathValid = processPathValidity([targetFilePath]);

  if (!isPathValid) return;

  if (fileExists) {
    const hashAlgorithm = 'sha256';
    const hash = createHash(hashAlgorithm);

    const onData = (chunk) => {
      hash.update(chunk);
    };

    const onEnd = () => {
      const fileHash = hash.digest('hex');
      writeText(getMessage('HASH', fileHash), colors.GREEN);
      showCurrentPath();
    };

    const onError = (error) => {
      return throwOperationFailed(error.message);
    };

    readFile(targetFilePath, onData, onEnd, onError);
  } else {
    return throwOperationFailed(errors.FILE_NOT_FOUND);
  }
};

export default hash;
