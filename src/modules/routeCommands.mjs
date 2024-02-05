import exit from './exit.mjs';
import cd from './nwd/cd.mjs';
import up from './nwd/up.mjs';
import ls from './nwd/ls.mjs';
import cat from './fs/cat.mjs';
import add from './fs/add.mjs';
import rn from './fs/rn.mjs';
import cp from './fs/cp.mjs';
import rm from './fs/rm.mjs';
import mv from './fs/mv.mjs';
import compress from './zlib/compress.mjs';
import decompress from './zlib/decompress.mjs';
import hash from './hash/hash.mjs';
import getSystemInfo from './os/getSystemInfo.mjs';

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
    case commands.ADD:
      await add(args);
      break;
    case commands.RN:
      await rn(args);
      break;
    case commands.CP:
      await cp(args);
      break;
    case commands.RM:
      await rm(args);
      break;
    case commands.MV:
      await mv(args);
      break;
    case commands.COMPRESS:
      await compress(args);
      break;
    case commands.DECOMPRESS:
      await decompress(args);
      break;
    case commands.HASH:
      await hash(args);
      break;
    case commands.OS:
      getSystemInfo(args);
      break;
    default:
      new CustomError(errors.INVALID_INPUT).displayErrorMessage();
  }
};

export default routeCommands;
