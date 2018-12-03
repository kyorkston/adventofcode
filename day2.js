const fs = require('fs');
const inputArray = fs.readFileSync('./day2input.txt', { encoding: 'utf8' }).split('\n')

let arrayOfCharArrays =
    inputArray.map((long) => {
        let innerLetterArray = []

        for (var i = 0; i < long.length; i++) {
            innerLetterArray.push(long.charAt(i))
        }
        return innerLetterArray
    })

// part 1
let newObject = {
    'twice': 0,
    'thrice': 0
}

function findDuplicateInArray(array) {
    array.forEach(el => {
        var object = {}
        let hasTwo = false
        let hasThree = false

        el.forEach((x, index) => {
            if(!object[x]) {
                object[x] = 0
            } else if (hasTwo && hasTwo) {
                return
            }
            object[x] +=1
        })

        Object.keys(object).forEach(e => {
            if (object[e] === 2) {
                hasTwo = true
            } else if (object[e] === 3) {
                hasThree = true
            }
        })

        if (hasTwo) {
            newObject['twice'] += 1
        }
        if (hasThree) {
            newObject['thrice'] += 1
        }
    })
    return newObject
}

console.log(findDuplicateInArray(arrayOfCharArrays))

// part 2
function findMatchingBoxIDs(array) {
    let charArray = []
    array.sort()
        .forEach((string, index) => {
            let item = array[index]
            let secondItem = array[index + 1]
            charArray.push(item)
            charArray.push(secondItem)

            while (charArray.length === 2) {
                var compareNum = 0
                for (var i = 0; i < 26; i++) {
                  if (charArray[1] === undefined) {
                      return
                  }
                  if (charArray[0].charAt(i) ===  charArray[1].charAt(i)) {
                    compareNum++
                  }
                  if (compareNum === 25) {
                      console.log(charArray);
                  }
                }
                charArray = []
            }
    })
}

console.log(findMatchingBoxIDs(inputArray))
