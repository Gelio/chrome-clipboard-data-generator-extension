import { generateNumber } from './generate-number.js';

const maxIPv6SegmentValue = 65535;

export function generateIPv6() {
  const parts = Array(8)
    .fill('')
    .map(() => generateNumber(0, maxIPv6SegmentValue).toString(16));

  return parts.join(':');
}
