import { generateHex } from './generate-hex.js';

export function generateMac() {
  const parts = Array(6)
    .fill('')
    .map(() => generateHex(2));

  return parts.join(':');
}
