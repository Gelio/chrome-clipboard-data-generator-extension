import { generateNumber } from './generate-number.js';

/**
 * Generate a stringified random HEX value
 *
 * @param {number} length The length of the generated HEX (in characters).
 */
export function generateHex(length) {
  const maxValue = Math.pow(16, length) - 1;
  const randomHex = generateNumber(0, maxValue).toString(16);

  return leftPad(randomHex, length, '0');
}

/**
 * @param {string} value
 * @param {number} desiredLength
 * @param {string} character
 */
function leftPad(value, desiredLength, character = ' ') {
  const length = value.length;

  if (length >= desiredLength) {
    return value;
  }

  const padding = Array(desiredLength - length)
    .fill(character.slice(0, 1))
    .join('');

  return `${padding}${value}`;
}
