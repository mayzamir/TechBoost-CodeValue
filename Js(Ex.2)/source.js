function foo(a1, a2) {
  a1.splice(1, 1);
  a2.splice(0, 1);
  return [...a1, ...a2];
}
function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  return foo(a1, a2);
}
console.log(bar().join("") === "281012");
/* 
one more option with rest :

function foo(x,y,z,...rest) {
  return [x, ...rest];
}
function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  
  return foo(...a1, ...a2);
}
console.log(bar().join("") === "281012");
*/
