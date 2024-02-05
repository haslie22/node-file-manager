const errors = {
  INCORRECT_CL_ARG:
    'Incorrect "--username" argument. To specify username, run again with "-- --username=your_username"',
  OPERATION_FAILED: 'Operation failed',
  INVALID_INPUT: 'Invalid input',
  UNEXPECTED_PARAMS: 'Unexpected parameters provided',
  EXCESSIVE_PARAMS: 'Too many parameters provided',
  MISSING_PARAMS: 'Command should be run with parameters',
  ROOT_DIR: 'Already in the root directory',
  FILE_EXISTS: 'File with this name already exists in the folder',
  FILE_NOT_FOUND: 'File or folder with this name not found',
};

export default errors;
