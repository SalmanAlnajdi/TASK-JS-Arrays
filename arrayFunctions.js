
let numbers = [1,2,3] ;
let instructors = ["Mshary", "Hasan"]
let teams = ["Brazil", "Germany", "Italy"]




/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  // Your code here
  let size = numbers.length;
  
  if(!!(size%2)== true){
    console.log(true);
  }else  if(!!(size%2)== false){
    console.log(false);
  }

}
 
isArrayLengthOdd(numbers)

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  let size = numbers.length;

  if(!!(size%2)== true){
    console.log(false);
  }else  if(!!(size%2)== false){
    console.log(true);
  }
}

isArrayLengthEven(numbers)

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  return instructors
}

addLailaToArray(instructors);
console.log(instructors);

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  teams.pop();
  return teams
}

eliminateTeam(teams)
console.log(teams)

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
let fruits = ["apple", "orange", "banana", "kiwi", "blueberry"]

function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  let size = fruits.length;

  if(!!(size%2) == true){
    fruits = []
    return fruits
  }else  if(!!(size%2)== false){
     let halfFruits = fruits.slice(2);
    return  halfFruits
  }
}

fruits = secondHalfOfArrayIfItIsEven(fruits)

console.log(fruits)

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
let shout = "Salman!!!!!!!"

function youGottaCalmDown(shout) {
  // Your code here
  let characterArray = shout.split("");

  let i =  characterArray.indexOf("!");

  characterArray = characterArray.slice(0,i);

  let x = characterArray.join("");
  
  return x
}

console.log(youGottaCalmDown(shout));
