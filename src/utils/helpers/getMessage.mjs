const getMessage = (type, textToEmbed) => {
  const messageTypes = {
    GREET: `Welcome to the File Manager, ${textToEmbed}!`,
    GOODBYE: `Thank you for using File Manager, ${textToEmbed}, goodbye!`,
    CURR_DIR: `You are currently in ${textToEmbed}`,
    START_HINT: 'To exit, press "Ctrl + C" or type ".exit" on a new line and press Enter',
    HOMEDIR: `Your home directory is ${textToEmbed}`,
    FILE_CREATED: `File ${textToEmbed} successfully created`,
    FILE_RENAMED: `File ${textToEmbed} successfully renamed`,
    FILE_COPIED: `File ${textToEmbed} successfully copied`,
    FILE_DELETED: `File ${textToEmbed} successfully deleted`,
    FILE_MOVED: `File ${textToEmbed} successfully moved`,
    FILE_COMPRESSED: `File ${textToEmbed} successfully compressed`,
    FILE_DECOMPRESSED: `File ${textToEmbed} successfully decompressed`,
    HASH: `Hash for file: ${textToEmbed}`,
  };

  return messageTypes[type] || '';
};

export default getMessage;
