import { EOL } from 'os';

import showCurrentPath from '../../utils/helpers/showCurrentPath.mjs';
import addIndent from '../../utils/helpers/addIndent.mjs';
import readFile from '../streams/readFile.mjs';
import processParams from '../../utils/helpers/processParams.mjs';

const cat = (targetFilePath) => {
  const absolutePath = processParams(targetFilePath);

  const onData = (chunk) => process.stdout.write(`${EOL}${chunk.toString()}`);
  const onEnd = () => {
    addIndent();
    showCurrentPath();
  };

  readFile(absolutePath, onData, onEnd);
};

export default cat;
