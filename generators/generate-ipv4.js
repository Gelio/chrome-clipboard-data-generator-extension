import { generateNumber } from './generate-number.js';

export function generateIPv4() {
  const octets = Array(4)
    .fill('')
    .map(() => generateNumber(0, 255).toString());

  return octets.join('.');
}
