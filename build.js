const Zip = require('node-zip');
const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const glob = promisify(require('glob'));

const extensionZip = new Zip();

const zipFileName = 'chrome-clipboard-data-generator-extension.zip';

const filesToPackage = [
  glob('generators/*'),
  Promise.resolve(['background.js', 'manifest.json', 'popup.html', 'popup.js']),
];

const zipIndividualFilesPromises = filesToPackage.map(filesPromise =>
  filesPromise.then(files => {
    return Promise.all(
      files.map(file =>
        readFile(file, { encoding: 'utf8' }).then(fileData =>
          extensionZip.file(file, fileData),
        ),
      ),
    );
  }),
);

Promise.all(zipIndividualFilesPromises)
  .then(() => {
    var zipData = extensionZip.generate({
      base64: false,
      compression: 'DEFLATE',
    });

    fs.writeFileSync(zipFileName, zipData, 'binary');

    console.log('Saved to', zipFileName);
  })
  .catch(error => {
    console.error('An error occurred', error);
  });
