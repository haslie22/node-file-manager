import getCurrentPath from './getCurrentPath.mjs';
import getMessage from './getMessage.mjs';
import writeText from './writeText.mjs';

import colors from '../constants/colors.mjs';

const showCurrentPath = () => {
  const message = getMessage('CURR_DIR', getCurrentPath());
  writeText(message);
};

export default showCurrentPath;
