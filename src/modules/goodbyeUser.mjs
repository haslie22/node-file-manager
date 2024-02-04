import getArgumentValue from '../utils/helpers/getArgumentValue.mjs';
import getMessage from '../utils/helpers/getMessage.mjs';
import writeText from '../utils/helpers/writeText.mjs';
import showCurrentPath from '../utils/helpers/showCurrentPath.mjs';

import colors from '../utils/constants/colors.mjs';

import { UNKNOWN_USERNAME } from '../utils/constants/names.mjs';

const goodbyeUser = () => {
  const username = getArgumentValue('username') || UNKNOWN_USERNAME;

  writeText(getMessage('GOODBYE', username), colors.BLUE);
  showCurrentPath();
};

export default goodbyeUser;
