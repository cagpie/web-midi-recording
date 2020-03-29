export default function insertUint8s (dataView, index, ints) {
  if (typeof ints === 'string') {
    ints = Array.from(ints).map((i) => i.charCodeAt(0));
  }

  for(let i = 0; i < ints.length; i++) {
    dataView.setUint8(index + i, ints[i]);
  }

  return index + ints.length;
}
