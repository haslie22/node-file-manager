const getMessage = (type, textToEmbed) => {
  const messageTypes = {
    GREET: `Welcome to the File Manager, ${textToEmbed}!`,
    GOODBYE: `Thank you for using File Manager, ${textToEmbed}, goodbye!`,
    CURR_DIR: `You are currently in ${textToEmbed}`,
    START_HINT: 'To exit, press "Ctrl + C" or type ".exit" on a new line and press Enter',
    HOMEDIR: `Your home directory is ${textToEmbed}`,
    FILE_CREATED: `File ${textToEmbed} successfully created`,
  };

  return messageTypes[type] || '';
};

export default getMessage;
