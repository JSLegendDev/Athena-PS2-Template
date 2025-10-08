# Athena PS2 Template

This is a template you can use to make games for the PS2 (Playstation 2) using the JavaScript programming language.
This is made possible by the AthenaEnv engine.

# How to Run?

Assuming that you have a working PCSX2 emulator on your machine and that you have enabled the
checkbox "Enable host filesystem" under Settings > Emulation.

Open the `athena.elf` file available in this template in the emulator.
In PCSX2, you can achieve this under System > Start File... by selecting the `athena.elf` file using the File Explorer.

# How to Make an .iso?

You can now use the provided build script to automatically create an `.iso` from the template files.

## On Debian/Ubuntu or WSL with Ubuntu:

1. Make sure you have the following dependencies installed: `zip`, `unzip`, and `genisoimage`.
   The build script will attempt to install them automatically if they are missing.

2. Open a terminal in the template directory and run:

```bash
bash build.sh
```

3. The script will build out the ISO, its pretty self explanatory

4. Once the ISO is created, you can open it in PCSX2 like any other PS2 game.

## On Windows (without native Linux tools):

1. Install [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and set up a Debian or Ubuntu distribution.

2. Open a WSL terminal in the directory containing this template.

3. Run the build script:

```bash
bash build.sh
```

4. After the script finishes, the ISO will be available at `build/output.iso`. You can then use it in PCSX2.

# For More Resources

* [PS2 Sonic Infinite Runner Source Code](https://github.com/DevWill-hub/Sonic-Infinite-Runner-PS2)
* [The Athena Env repo, documentation included in README](https://github.com/DanielSant0s/AthenaEnv)

# Important

The version available in the repository is a stable version called AthenaEnv V4. The documentation/README has been updated to: [https://github.com/DanielSant0s/AthenaEnv/blob/v4/README.md](https://github.com/DanielSant0s/AthenaEnv/blob/v4/README.md)

You can still use the version available in the AthenaEnv GitHub Releases section, the most stable version, but remember to use the documentation/README already available from the beginning.
