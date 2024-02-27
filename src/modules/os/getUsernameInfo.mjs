import { userInfo } from 'os';

import getMessage from '../../utils/helpers/getMessage.mjs';
import writeText from '../../utils/helpers/writeText.mjs';

import colors from '../../utils/constants/colors.mjs';

const getUsernameInfo = () => {
  const message = getMessage('USERNAME', userInfo().username);
  writeText(message, colors.GREEN);
};

export default getUsernameInfo;
