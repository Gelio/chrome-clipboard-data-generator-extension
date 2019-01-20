import { generateIPv6 } from './generate-ipv6.js';
import { generateNumber } from './generate-number.js';

export function generateCidrIPv6() {
  const ip = generateIPv6();
  const mask = generateNumber(1, 126);

  return `${ip}/${mask}`;
}
