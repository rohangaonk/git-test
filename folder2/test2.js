function getMax(arr) {
  return Math.max.apply(null, arr);
}

function getMin(arr) {
  return Math.min.apply(null, arr);
}

function getMid(arr) {
  return arr[arr.length / 2];
}

function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}

function getAny(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getLength(arr) {
  return arr.length;
}
