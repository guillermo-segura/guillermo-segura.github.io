/**
 * Returns a random element from an array.
 *
 * This generic function accepts an array of any type and returns a randomly selected
 * element from that array. The function works for arrays of any data type, as specified
 * by the generic type parameter `T`.
 *
 * @template T - The type of elements contained in the array.
 * @param {T[]} arr - The array from which to select a random element.
 * @returns {T} A randomly selected element from the input array.
 *
 * @example
 * // Returns either 1, 2, or 3 randomly
 * const randomNumber = getRandomValue([1, 2, 3]);
 *
 * @example
 * // Returns either "apple", "banana", or "cherry" randomly
 * const randomFruit = getRandomValue(["apple", "banana", "cherry"]);
 */
export const getRandomValue = <T>(arr: T[]): T => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
