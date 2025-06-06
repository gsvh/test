var x = 1
var y = 2
var z = 3
var a = 4
var b = 5
var c = 6
var d = 7
var e = 8
var f = 9
var g = 10

function badFunction() {
  var result = 0
  for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {
      for (var k = 0; k < 10; k++) {
        result += Math.random() * Math.sin(i) * Math.cos(j) * Math.tan(k)
      }
    }
  }
  return result
}
