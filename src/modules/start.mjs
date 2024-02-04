import { createInterface } from 'readline';

import greetUser from './greetUser.mjs';
import goodbyeUser from './goodbyeUser.mjs';
import routeCommands from './routeCommands.mjs';

const start = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('close', goodbyeUser);
  rl.on('line', async (input) => await routeCommands(input));

  greetUser();
};

export default start;
