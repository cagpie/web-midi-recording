export default function parseUint8 (num, isMSB) {
  const digit = isMSB ? 7 : 8;

  const value = [num % (2 ** digit)];

  while (num >= (2 ** digit)) {
    num >>= digit;
    value.push(num);
  }

  return value
    .map((item, idx) => {
      if (isMSB && idx) {
        return item + 0b10000000;
      } 
      return item
    })
    .reverse();
}
