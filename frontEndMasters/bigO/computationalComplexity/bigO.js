
//! O(n)
const crossAdd = (input) => {
    let result = []
    for (let i =0; i < input.length; i ++) {
        let goingUp = input[i];
        let goingDown = input[input.length -1 -i]
        result.push(goingUp + goingDown)
    }
    return result
}


//*     this one is interesting, its best case is finding the needle at index 1,
//*     its worst case is finding it as index -1
//*     average case would be haystack length / 2

//*     However, we assume worst case unless said otherwise - 
//*     if we pass 1 billion elements to this linear search function, it could find the needle in the -1 indexed item

function find(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) return true;
    }
  }

//* make a tuple (form python) of every combination within an array
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

//* constant time example
//* the time doesn't change as the array size increases
function getMiddleOfArray(array) {
    return array[Math.floor(array.length / 2)];
  }


