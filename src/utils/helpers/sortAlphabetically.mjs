const sortAlphabetically = (inputArray, pivotProperty) => {
  return inputArray.sort((a, b) => a[pivotProperty].localeCompare(b[pivotProperty]));
};

export default sortAlphabetically;
