import { parse } from 'path';

const isSameDrive = (path1, path2) => {
  const drive1 = parse(path1).root;
  const drive2 = parse(path2).root;
  return drive1 && drive2 && drive1.toUpperCase() === drive2.toUpperCase();
};

export default isSameDrive;
