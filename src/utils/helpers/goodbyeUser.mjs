import getArgumentValue from './getArgumentValue.mjs';
import getMessage from './getMessage.mjs';
import writeText from './writeText.mjs';
import showCurrentPath from './showCurrentPath.mjs';

import colors from '../constants/colors.mjs';

import { UNKNOWN_USERNAME } from '../constants/names.mjs';

const goodbyeUser = () => {
  const username = getArgumentValue('username') || UNKNOWN_USERNAME;

  writeText(getMessage('GOODBYE', username), colors.BLUE);
};

export default goodbyeUser;
