const getArgumentValue = (argumentName) => {
  const args = process.argv.slice(2);
  const argumentIndex = args.findIndex((arg) => arg.startsWith(`--${argumentName}=`));

  return argumentIndex !== -1 ? args[argumentIndex].split('=')[1] : null;
};

export default getArgumentValue;
