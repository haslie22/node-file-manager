import { resolve } from 'path';

import getCurrentPath from './getCurrentPath.mjs';
import trimQuotes from './trimQuotes.mjs';

import CustomError from '../CustomError.mjs';

import errors from '../constants/errors.mjs';

const processParams = (unprocessedPath) => {
  if (unprocessedPath.length === 1) {
    return resolve(getCurrentPath(), trimQuotes(unprocessedPath[0]));
  } else if (unprocessedPath.length > 1) {
    if (typeof unprocessedPath === 'string') {
      return resolve(getCurrentPath(), trimQuotes(unprocessedPath));
    } else {
      const joinedPath = trimQuotes(unprocessedPath.join(' '));
      return resolve(getCurrentPath(), joinedPath);
    }
  } else {
    return new CustomError(errors.MISSING_PARAMS).displayErrorMessage();
  }
};

export default processParams;
