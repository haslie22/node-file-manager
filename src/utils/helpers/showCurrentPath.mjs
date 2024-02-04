import getCurrentPath from './getCurrentPath.mjs';
import getMessage from './getMessage.mjs';
import writeText from './writeText.mjs';

const showCurrentPath = () => {
  const message = getMessage('CURR_DIR', getCurrentPath());
  writeText(message);
};

export default showCurrentPath;
