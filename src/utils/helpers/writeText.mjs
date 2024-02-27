import { EOL } from 'os';

import colors from '../constants/colors.mjs';

import isValidString from '../typeguards/isValidString.mjs';

const writeText = (text, color = colors.DEFAULT) => {
  if (!isValidString(text)) return;

  const coloredText = `${color}${text}${colors.DEFAULT}${EOL}${EOL}`;
  process.stdout.write(coloredText);
};

export default writeText;
