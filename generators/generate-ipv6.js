import { generateHex } from './generate-hex.js';

export function generateIPv6() {
  const parts = Array(8)
    .fill('')
    .map(() => generateHex(4));

  return parts.join(':');
}
