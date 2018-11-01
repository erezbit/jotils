/**
 * @description
 * random value from all values in array
 * @param {any[]} array an array to return random value
 * @returns {any} random value
 * @example
 * randomValueFromArray([1,2,3]) // => 2
*/
import randomBetween from '../randomBetween';

export default function randomValueFromArray(array) {
    return array[randomBetween(0, array.length - 1)];
}
