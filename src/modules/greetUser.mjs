import getArgumentValue from '../utils/helpers/getArgumentValue.mjs';
import getMessage from '../utils/helpers/getMessage.mjs';
import writeText from '../utils/helpers/writeText.mjs';

import colors from '../utils/constants/colors.mjs';
import errors from '../utils/constants/errors.mjs';

const greetUser = () => {
  let username = getArgumentValue('username');

  if (!username) {
    writeText(errors.INCORRECT_CL_ARG, colors.GREY);
    username = 'incognito 😎';
  }

  writeText(getMessage('GREET', username), colors.BLUE);
  writeText(getMessage('START_HINT'), colors.YELLOW);
};

export default greetUser;
