import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

const cd = (targetDirPath) => {
  const absolutePath = processParams(targetDirPath);

  try {
    process.chdir(absolutePath);
  } catch (error) {
    throwOperationFailed(error.message);
  }

  showCurrentPath();
};

export default cd;
