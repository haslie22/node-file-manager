import { access, constants } from 'fs/promises';

const doesFileExist = async (filePath) => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    console.log('from doesFileExist');
    return false;
  }
};

export default doesFileExist;
