import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import processParams from '../../utils/helpers/processParams.mjs';
import throwOperationFailed from '../../utils/helpers/throwOperationFailed.mjs';

const cd = (targetDirPath) => {
  const absolutePath = processParams(targetDirPath);
  if (!absolutePath) return;

  try {
    process.chdir(absolutePath);
    showCurrentPath();
  } catch (error) {
    return throwOperationFailed(error.message);
  }
};

export default cd;
