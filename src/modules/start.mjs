import { createInterface } from 'readline';

import greetUser from './greetUser.mjs';
import getHomedir from '../utils/helpers/getHomedir.mjs';
import setCurrentPath from '../utils/helpers/setCurrentPath.mjs';
import showCurrentPath from '../utils/helpers/showCurrentPath.mjs';

const start = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  greetUser();

  setCurrentPath(getHomedir());
  showCurrentPath();
};

export default start;
