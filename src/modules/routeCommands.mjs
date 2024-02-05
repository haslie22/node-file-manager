import exit from './exit.mjs';
import cd from './nwd/cd.mjs';
import up from './nwd/up.mjs';
import ls from './nwd/ls.mjs';
import cat from './fs/cat.mjs';

import commands from '../utils/constants/commands.mjs';
import errors from '../utils/constants/errors.mjs';

import CustomError from '../utils/CustomError.mjs';

const routeCommands = async (line) => {
  const args = line.match(/(['"]).*?\1|\S+/g) || [];
  const command = args.shift();

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
    case commands.CAT:
      cat(args);
      break;
    default:
      new CustomError(errors.INVALID_INPUT).displayErrorMessage();
  }
};

export default routeCommands;
