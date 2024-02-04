import getArgumentValue from '../utils/helpers/getArgumentValue.mjs';
import getMessage from '../utils/helpers/getMessage.mjs';
import writeText from '../utils/helpers/writeText.mjs';
import getHomedir from '../utils/helpers/getHomedir.mjs';
import setCurrentPath from '../utils/helpers/setCurrentPath.mjs';
import showCurrentPath from '../utils/helpers/showCurrentPath.mjs';

import colors from '../utils/constants/colors.mjs';
import errors from '../utils/constants/errors.mjs';

import { UNKNOWN_USERNAME } from '../utils/constants/names.mjs';

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
