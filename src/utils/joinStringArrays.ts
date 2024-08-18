/**
 * Combines multiple arrays of strings into a single string, removing duplicates.
 *
 * This function accepts an indefinite number of arrays containing strings. It flattens
 * these arrays, removes any duplicate strings, and then concatenates the unique strings
 * into a single string, with each string separated by a space.
 *
 * @param {...string[]} args - An indefinite number of arrays containing strings to be combined.
 * @returns {string} A single string composed of all unique strings from the input arrays, separated by spaces.
 *
 * @example
 * combineStringArrays(
 *   ["apple", "banana", "cherry"],
 *   ["banana", "date", "apple"],
 *   ["fig", "grape", "cherry"]
 * );
 * // Returns "apple banana cherry date fig grape"
 */
export const joinStringArrays = (...args: string[][]): string => (
  Array.from(new Set(args.flat())).join(' ')
);
