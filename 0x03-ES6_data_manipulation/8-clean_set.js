export default function cleanSet(set, startString) {
  const resultArray = [];
  if (startString !== undefined && startString !== ''
      && typeof startString === 'string' && set instanceof Set) {
    set.forEach((item) => {
      if (item !== undefined && item.startsWith(startString)) {
        const string = item.replace(startString, '');
        resultArray.push(string);
      }
    });
  }
  return resultArray.join('-');
}
