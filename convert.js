const { program } = require('commander');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const supportedFormats = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];

program
  .name('convertToGif')
  .description('Convert video to gif')
  .version('1.0.0')
  .arguments('<input>', 'Path to video file')
  .option('-o, --output <output>', 'Specify the output file path and name. If omitted, the GIF is saved in the same directory as the input file with the same name but with a `.gif` extension. | Derived from input file')
  .option('-s, --size <resolution>', 'Resize GIF resolution (e.g., 640x480, 320x?)', '640x?')
  .option('-f, --fps <frames>', 'Set GIF frame rate (default: 10)', '10')
  .action((input, options) => {

    if (!fs.existsSync(input)) {
      console.error('Input file does not exist', input);
      process.exit(1);
    }

    const fileExtension = path.extname(input).toLowerCase();
    if (!supportedFormats.includes(fileExtension)) {
      console.error('Unsupported file format', fileExtension);
      process.exit(1);
    }

    const inputDir = path.dirname(input);
    const inputBaseName = path.basename(input, fileExtension);
    const outputFile = options.output || path.join(inputDir, `${inputBaseName}.gif`);


    console.log(`Converting ${input} to ${outputFile}`);
    ffmpeg(input)
      .output(outputFile)
      .size(options.size)
      .fps(options.fps)
      .videoCodec('gif')
      .on('start', (commandLine) => {
        console.log('Spawned Ffmpeg with command: ' + commandLine);
      })
      .on('progress', (progress) => {
        console.log('Processing: ' + progress.percent + '% done');
      })
      .on('end', () => {
        console.log('Finished converting video to gif');
      })
      .on('error', (err) => {
        console.error('Error during conversion:', err.message);
      })
      .run();
  });
program.parse(process.argv);