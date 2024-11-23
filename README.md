# Convert to GIF

`convertToGif` is a command line tool that converts video files to GIF files.

---

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Navigate to the project directory in the terminal and run the following command to install the tool globally:

   ```bash
   npm setup
   ```

3. Confirm the installation by running:

   ```bash
   convertToGif --help
   ```

---

## Usage

The basic syntax is:

```bash
convertToGif [options] <inputFile>
```

### Required Argument

- `<inputFile>`: Path to the video file you want to convert. **This argument is required.**

### Options

| Option                   | Description                                                                                                                                                  | Default Value    |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| `-o, --output <path>`    | Specify the output file path and name. If omitted, the GIF is saved in the same directory as the input file with the same name but with a `.gif` extension. | Derived from input file |
| `-s, --size <resolution>`| Resize GIF resolution (e.g., 640x480, 320x?)', '640x?`). The `?` preserves the aspect ratio.                                                                      | `640x?`         |
| `-f, --fps <frames>`     | Set GIF frame rate. Higher values make smoother animations but increase file size.                                                               | `10`            |
| `-h, --help`             | Show help information about the command.                                                                                                                    | N/A             |
| `-V, --version`          | Show the version of the tool.                                                                                                                               | N/A             |

---

## Examples

### Convert a Video to GIF with Default Settings

This converts `input.mp4` to `input.gif` in the same directory as the input file:

```bash
convertToGif input.mp4
```

### Specify Output Location and Name

Save the GIF to a specific file path:

```bash
convertToGif input.mov -o /home/user/animations/output.gif
```

### Customize Resolution

Resize the GIF to a specific resolution, keeping the aspect ratio:

```bash
convertToGif input.avi -s 320x240
```

### Adjust Frame Rate

Increase the frame rate for smoother animations:

```bash
convertToGif input.mkv -f 15
```

---

## Supported Formats

The tool supports the following video formats:

- `.mp4`
- `.mov`
- `.avi`
- `.mkv`
- `.webm`

Ensure your input file uses one of these extensions.

---

## Troubleshooting

### FFmpeg Not Found

This tool uses FFmpeg, so ensure it's installed on your system and available in your `PATH`. To install FFmpeg:

- **Linux**: Use your package manager (e.g., `sudo apt install ffmpeg`).
- **MacOS**: Install via Homebrew (`brew install ffmpeg`).
- **Windows**: Download the binary from [FFmpeg.org](https://ffmpeg.org/download.html) and add it to your system's PATH.

### Input File Not Found

Ensure the file path is correct. Use absolute paths or navigate to the directory containing the file.

---