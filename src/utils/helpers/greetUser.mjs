import getArgumentValue from './getArgumentValue.mjs';
import getMessage from './getMessage.mjs';
import writeText from './writeText.mjs';
import getHomedir from './getHomedir.mjs';
import setCurrentPath from './setCurrentPath.mjs';
import showCurrentPath from './showCurrentPath.mjs';

import colors from '../constants/colors.mjs';
import errors from '../constants/errors.mjs';

import { UNKNOWN_USERNAME } from '../constants/names.mjs';

const greetUser = () => {
  let username = getArgumentValue('username');

  if (!username) {
    writeText(errors.INCORRECT_CL_ARG, colors.GREY);
    username = UNKNOWN_USERNAME;
  }

  writeText(getMessage('GREET', username), colors.BLUE);

  setCurrentPath(getHomedir());
  showCurrentPath();

  writeText(getMessage('START_HINT'), colors.YELLOW);
};

export default greetUser;
