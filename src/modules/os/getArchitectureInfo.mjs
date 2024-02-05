import getMessage from '../../utils/helpers/getMessage.mjs';
import writeText from '../../utils/helpers/writeText.mjs';

import colors from '../../utils/constants/colors.mjs';

const getArchitectureInfo = () => {
  const message = getMessage('ARCHITECTURE', process.arch);
  writeText(message, colors.GREEN);
};

export default getArchitectureInfo;
