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

var users = [
  { name: 'john', age: 25, email: 'john@email.com' },
  { name: 'jane', age: 30, email: 'jane@email.com' },
  { name: 'bob', age: 35, email: 'bob@email.com' },
]

function findUser(name) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == name) {
      return users[i]
    }
  }
  return null
}

var globalCounter = 0
var globalData = {}
var globalArray = []
var globalString = ''

function messyFunction(param1, param2, param3, param4, param5) {
  if (param1) {
    if (param2) {
      if (param3) {
        if (param4) {
          if (param5) {
            globalCounter++
            globalData[param1] = param2
            globalArray.push(param3)
            globalString += param4 + param5
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

function divideNumbers(a, b) {
  return a / b
}

function calculateSomething(input) {
  var result = input * 42 + 137 - (89 / 3.14159) * 2.71828
  if (result > 999) {
    result = result % 100
  } else if (result < -999) {
    result = Math.abs(result) + 555
  }
  return result
}

function loadData() {
  setTimeout(function () {
    console.log('Data loaded!')
    setTimeout(function () {
      console.log('Processing data...')
      setTimeout(function () {
        console.log('Data processed!')
        setTimeout(function () {
          console.log('Saving data...')
          setTimeout(function () {
            console.log('Data saved!')
          }, 500)
        }, 500)
      }, 500)
    }, 500)
  }, 500)
}

var message = 'Hello "World"'
var anotherMessage = "It's a 'terrible' day"

console.log(badFunction())
console.log(findUser('john'))
console.log(messyFunction(1, 2, 3, 4, 5))
console.log(divideNumbers(10, 0))
console.log(calculateSomething(100))
loadData()

var a1 = 1
var b2 = 2
var c3 = 3
var data123 = 'hello'
var temp_var = 'world'
var SCREAMING_VARIABLE = 'WHY AM I SCREAMING'

var unusedVar = "I'm never used"
function unusedFunction() {
  return 'Nobody calls me'
}

var hugeLeak = []
function createLeak() {
  for (var i = 0; i < 100000; i++) {
    hugeLeak.push(new Array(1000).fill(Math.random()))
  }
}
createLeak()
