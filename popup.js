import { generateCidrIPv4 } from './generators/generate-cidr-ipv4.js';
import { generateCidrIPv6 } from './generators/generate-cidr-ipv6.js';
import { generateIPv4 } from './generators/generate-ipv4.js';
import { generateIPv6 } from './generators/generate-ipv6.js';
import { generateTimestamp } from './generators/generate-timestamp.js';
import { generateDate } from './generators/generate-date.js';
import { generateTimeAndDate } from './generators/generate-time-and-date.js';

const generators = [
  {
    id: 'generate-ipv4',
    generate: generateIPv4,
  },
  {
    id: 'generate-ipv6',
    generate: generateIPv6,
  },
  {
    id: 'generate-cidr-ipv4',
    generate: generateCidrIPv4,
  },
  {
    id: 'generate-cidr-ipv6',
    generate: generateCidrIPv6,
  },
  {
    id: 'generate-timestamp',
    generate: generateTimestamp,
  },
  {
    id: 'generate-date',
    generate: generateDate,
  },
  {
    id: 'generate-time-and-date',
    generate: generateTimeAndDate,
  },
];

const updateLastCopiedValue = (() => {
  const lastCopiedValueContainer = document.getElementById('last-copied-value');

  return text => {
    chrome.storage.local.set({
      lastValue: text,
    });
    lastCopiedValueContainer.innerText = text;
  };
})();

function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

generators.forEach(generator => {
  const button = document.getElementById(generator.id);

  button.addEventListener('click', () => {
    const text = generator.generate();

    copyToClipboard(text).then(() => {
      updateLastCopiedValue(text);
      console.log('Copied', text);
    });
  });
});

chrome.storage.local.get(['lastValue'], ({ lastValue }) => {
  console.log(lastValue);
  if (lastValue) {
    updateLastCopiedValue(lastValue);
  }
});
