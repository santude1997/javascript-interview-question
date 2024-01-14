// check provided value is an object or an array
function checkArray(ele) {
  return Array.isArray(ele);
}

console.log("Check array is " + checkArray([]));
console.log("Check array is " + checkArray({}));
