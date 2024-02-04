import getHomedir from '../../utils/helpers/getHomedir.mjs';
import getMessage from '../../utils/helpers/getMessage.mjs';
import writeText from '../../utils/helpers/writeText.mjs';

import colors from '../../utils/constants/colors.mjs';

const showHomedir = () => {
  const message = getMessage('HOMEDIR', getHomedir());
  writeText(message, colors.GREEN);
};

export default showHomedir;
