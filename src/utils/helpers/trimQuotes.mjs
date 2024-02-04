const trimQuotes = (path) => {
  if (!path) return '';
  return path.trim().replace(/^["'`]|["'`]$/g, '');
};

export default trimQuotes;
