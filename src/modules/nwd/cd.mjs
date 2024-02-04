import { resolve } from 'path';

import getCurrentPath from '../../utils/helpers/getCurrentPath.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import trimQuotes from '../../utils/helpers/trimQuotes.mjs';

import CustomError from '../../utils/CustomError.mjs';

import errors from '../../utils/constants/errors.mjs';

const cd = (targetDirPath) => {
  let absolutePath = '';

  if (targetDirPath.length === 1) {
    absolutePath = resolve(getCurrentPath(), trimQuotes(targetDirPath[0]));
  } else if (targetDirPath.length > 1) {
    const joinedPath = targetDirPath.map(trimQuotes).join(' ');
    absolutePath = resolve(getCurrentPath(), joinedPath);
  } else {
    return new CustomError(errors.MISSING_PARAMS).displayErrorMessage();
  }

  try {
    process.chdir(absolutePath);
  } catch (error) {
    return new CustomError(error.message).displayErrorMessage();
  }

  showCurrentPath();
};

export default cd;
