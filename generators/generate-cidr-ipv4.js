import { generateIPv4 } from './generate-ipv4.js';
import { generateNumber } from './generate-number.js';

export function generateCidrIPv4() {
  const ip = generateIPv4();
  const mask = generateNumber(1, 28);

  return `${ip}/${mask}`;
}
