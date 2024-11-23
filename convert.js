const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const inputFile = 'input.mov';
const outputFile = 'output.gif';

ffmpeg(inputFile)
  .output(outputFile)
  .size('640x?')
  .fps(10)
  .on('start', (commandLine) => {
    console.log('FFmpeg command: ', commandLine);
  })
  .on('progress', (progress) => {
    console.log('Processing: ', progress.percent.toFixed(2) + '%');
  })
  .on('end', () => {
    console.log('Conversion completed. GIF saved to:', outputFile);
  })
  .on('error', (err) => {
    console.error('Error occurred:', err.message);
  })
  .run();