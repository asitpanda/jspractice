function displayArrayElement(arr) {
  var result = [];
  for(var i=0;i<arr.length;i++) {
    result[i] = function() {return arr[i]};
  }
  return result;
}
var arr = [10,20,30,40,50];
var res = displayArrayElement(arr);
console.log(res[1]())

//O/P = undefined
