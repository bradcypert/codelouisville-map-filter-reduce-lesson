
/**
 * For this problem, you'll be provided an array of integers,
 * You need to map over the array and multiply each value by two.
 * 
 * Example input: [1,2,3]
 * Example output: [2,4,6]
 * 
 * Keep in mind that, with Map, if the input array is N items long, the output array should also be N items long.
 *  if the input array is 4 items long, the output array should also be 4 items long.

 * 
 * @param {*} arr 
 */
function mapPractice(arr) {

}

/**
 * In this example, you'll be provided an array of strings
 * You'll want to map each of these strings to their uppercase version.
 * Example input: ["brad", "tom", "mike"]
 * Expected output: ["BRAD", "TOM", "MIKE"]
 * @param {*} arr 
 */
function mapPractice2(arr) {

}

/**
 * For this problem, you'll receive an array of values. We want to filter out `null` values.
 * 
 * Keep in mind that, with Filter, if the input array is N items long, the output array should contain N or less items.
 * @param {*} arr 
 */
function filterPractice(arr) {

}

/**
 * For this problem, you'll be provided an array of objects.
 * The objects will have a key of "age".
 * We want to return a new array with all of the objects under 18 filtered out.
 * @param {*} arr 
 */
function filterPractice2(arr) {

}

/**
 * For this problem, you'll be provided an array of numbers.
 * Use arr.reduce to add all the numbers and return that number.
 * 
 * Remember that the function provided to reduce takes two parameters.
 * The first is the accumulator and the second is the current value.
 * 
 * If you have a hard time remembering the syntax here, you can copy this and paste it in the reduce call to get started.
 * 
 * function (accummulator, currentValue) {
 *   return accumulator;
 * }
 * 
 * Alternatively, the shorthand is (accumulator, currentValue) => accumulator
 * 
 * Keep in mind that, with Map, if the input array is N items long, the output should be 1 item.

 * 
 * @param {*} arr 
 */
function reducePractice(arr) {

}

/**
 * This one is tricky.
 * You'll be provided an array of objects.
 * Each object will have a key of lastName and firstName.
 * Write a reduce function for the array that returns a single object.
 * That object's key's should be each unique last name, and the value of that key should be the number of times
 * that last name appeared in the array.
 * 
 * For example: You'll have the input -
 * [
 *   {firstName: "Brad", lastName: "Cypert"},
 *   {firstName: "Mark", lastName: "Wahlberg"},
 *   {firstName: "Seth", lastName: "Rogen"},
 *   {firstName: "Tom", lastName: "Cypert"},
 *   {firstName: "Mike", lastName: "Cypert"},
 *   {firstName: "Sara", lastName: "Wahlberg"}
 * ]
 * 
 * This should produce the output:
 * 
 * {
 *   Cypert: 3,
 *   Wahlberg: 2,
 *   Rogen: 1
 * }
 * 
 * Good luck and ask if you need help!
 * @param {*} arr 
 */
function reducePractice2(arr) {

}

module.exports = { mapPractice, mapPractice2, filterPractice, filterPractice2, reducePractice, reducePractice2 };
