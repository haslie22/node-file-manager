import writeText from './helpers/writeText.mjs';

import colors from './constants/colors.mjs';

class CustomError extends Error {
  constructor(message) {
    super(message);
  }

  displayErrorMessage() {
    writeText(this.message, colors.RED);
  }
}

export default CustomError;
