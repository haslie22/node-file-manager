import exit from './exit.mjs';
import cd from './nwd/cd.mjs';
import up from './nwd/up.mjs';
import ls from './nwd/ls.mjs';

import commands from '../utils/constants/commands.mjs';
import errors from '../utils/constants/errors.mjs';

import CustomError from '../utils/CustomError.mjs';

const routeCommands = async (line) => {
  const [command, ...args] = line.trim().split(' ');

  switch (command) {
    case commands.EXIT:
      exit();
      break;
    case commands.CD:
      cd(args);
      break;
    case commands.UP:
      up(args);
      break;
    case commands.LS:
      ls(args);
      break;
    default:
      new CustomError(errors.INVALID_INPUT).displayErrorMessage();
  }
};

export default routeCommands;
