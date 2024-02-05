import { EOL } from 'os';

import getMessage from '../../utils/helpers/getMessage.mjs';
import writeText from '../../utils/helpers/writeText.mjs';

import colors from '../../utils/constants/colors.mjs';

const getEOLInfo = () => {
  const message = getMessage('EOL', JSON.stringify(EOL));
  writeText(message, colors.GREEN);
};

export default getEOLInfo;
