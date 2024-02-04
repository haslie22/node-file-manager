import { readdir, lstat, readlink } from 'fs/promises';
import { join } from 'path';

import sortAlphabetically from '../../utils/helpers/sortAlphabetically.mjs';
import getCurrentPath from '../../utils/helpers/getCurrentPath.mjs';
import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';

import CustomError from '../../utils/CustomError.mjs';

import errors from '../../utils/constants/errors.mjs';
import { itemType } from '../../utils/constants/names.mjs';

const ls = async (args) => {
  if (args.length) {
    return new CustomError(errors.UNEXPECTED_PARAMS).displayErrorMessage();
  }

  const currentPath = getCurrentPath();
  const contents = await readdir(currentPath);

  const files = [];
  const dirs = [];
  const symlinks = [];

  let hasErrors = false;

  await Promise.all(
    contents.map(async (item) => {
      const itemPath = join(currentPath, item);
      const stats = await lstat(itemPath);

      if (stats.isSymbolicLink()) {
        symlinks.push({ name: item, type: itemType.SYMLINK });
      } else if (stats.isFile()) {
        files.push({ name: item, type: itemType.FILE });
      } else {
        dirs.push({ name: item, type: itemType.DIR });
      }
    })
  ).catch((error) => {
    hasErrors = true;
    new CustomError(error.message).displayErrorMessage();
  });

  const sortedDirs = sortAlphabetically(dirs, 'name');
  const sortedFiles = sortAlphabetically(files, 'name');
  const sortedSymlinks = sortAlphabetically(symlinks, 'name');

  if (!hasErrors) console.table([...sortedDirs, ...sortedFiles, ...sortedSymlinks]);

  showCurrentPath();
};

export default ls;
