import exit from './exit.mjs';

import commands from '../utils/constants/commands.mjs';

const routeCommands = async (line) => {
  const [command, ...args] = line.trim().split(' ');

  switch (command) {
    case commands.EXIT:
      exit();
      break;
    default:
      // TODO: implement function for error handling
      console.error('Invalid input');
  }
};

export default routeCommands;
