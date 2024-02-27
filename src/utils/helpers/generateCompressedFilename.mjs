const generateCompressedFilename = (sourceFilePath) => {
  const originalFilename = sourceFilePath.split('/').pop();
  const extensionIndex = originalFilename.lastIndexOf('.');
  const baseFilename = extensionIndex !== -1 ? originalFilename.slice(0, extensionIndex) : originalFilename;
  const compressedFilename = `${baseFilename}_compressed.br`;

  return compressedFilename;
};

export default generateCompressedFilename;
