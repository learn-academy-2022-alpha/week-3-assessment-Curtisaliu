// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// // a describe method that lists the name of the function OR naming of the particular test.
describe("fibonacci", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]

    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Got Red.
// ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a funciton called fibonacci
// Takes a number that greater than two
// Likely need a for loop
// Maybe use .push
// results with a formula for the fibonacci sequence

function fibonacci(n) {

const result = [1, 1]
  for (var i = 2; i < n; i++) {
    result.push(result[i-2] + result [i-1])
  }
  return result
}

// Got Green.
// Had to use google to help me. Not really sure how line 51 is working.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("oddNum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]

    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(oddNum(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNum(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Got Red.
// ReferenceError: oddNum is not defined.

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function named oddNum.
// takes in an array of data
// Must use some sort of filter
// Likely need to sort the numbers
// returns only odd numbers from leasst to greatest

const oddNum = (array) => {
  let curtisIsTired = array.filter(n => typeof n === "number" && n%2 !== 0)
  return curtisIsTired.sort((a, b) => a - b)
}

// Got Green.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// / a describe method that lists the name of the function OR naming of the particular test.
describe("sum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
    // Expected output: []

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sum(numbersToAdd3)).toEqual([])
  })
})

// Got Red.
// sum is not defined

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function called sum
// Likely will need to create a variable that equals 0
// Some sort of method to return a new array
// Likely need to add a number to the value
// Return the accumlated sum


const sum = (array) => {
  let num = 0
  let num1 = array.map(value => {
    num = value + num
    return num
  })
  return num1
}

// Got Green.
