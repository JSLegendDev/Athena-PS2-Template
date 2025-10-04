# Athena PS2 Template

This is a template you can use to make games for the PS2 (Playstation 2) using the JavaScript programming language.
This is made possible by the AthenaEnv engine.

# How to Run?

Assuming that you have a working PCSX2 emulator on your machine and that you have enabled the
checkbox "Enable host filesystem" under Settings > Emulation.

Open the `athena.elf` file available in this template in the emulator.
In PCSX2, you can achieve this under System > Start File... by selecting the `athena.elf` file using the File Explorer.

# How to Make an .iso?

## CLI (Linux) Way
Download `genisoimage` for your distro: 
 - Debian & Fedora - Package name is `genisoimage`
 - Arch & Redhat - `genisoimage` is available in the package `cdrkit`

 Then use this command (Do not zip the folder):

 ```
 genisoimage -o {name_of_iso}.iso -R -J {/folder/holding/all/the/files}   
```
 
 Now the `iso` can be opened with any emulator, just like a real PS2 game.
 
 Extra note regarding the command flags: 
 | Option | Description |
 |--------|-------------|
 | **-R** | Enables Rock Ridge extensions, which allows for additional file attributes and metadata specific to UNIX/Linux systems, such as long file names and ownership information. |
 | **-J** | Enables Joliet extensions, which provide support for long file names and Unicode characters, making the ISO compatible with Windows systems. |


## CLI (Windows) Way (NOT TESTED YET)
1. Install 7-zip
2. Open Command Prompt & use the following commands to create an ISO from the folder:

   ```bash
   "C:\Program Files\7-Zip\7z.exe" a -tiso output.iso "C:\path\to\your\folder\*"
   ```

Note: This command directly creates an ISO file from the specified folder, do not zip the folder
(The `-tiso` option in 7-Zip specifies the type of archive you want to create. When you use this option, you are instructing 7-Zip to create an **ISO file**.) 


## Online Way
You might want to build a single .iso file you can distribute your game as.
To achieve this, create a zip of all the files present in this template.
This includes your source code, `athena.elf`, `athena.ini`, `ATHA_000.01` and `SYSTEM.CNF`.
Exclude this readme.

Make sure to create the zip archive by selecting each file and folder one by one rather than zipping the outer folder
containing everything. It might still work, but I only had success with the former method.

Once the zip is created, you can convert it into an `.iso` with this website https://mconverter.eu/.
If you know of other alternatives that successfully builds an `.iso` that runs, feel free to make a pull request.

Once the `.iso` is created, you can open it up in the emulator like you would any other PS2 game.

# For More Resources

- [PS2 Sonic Infinite Runner Source Code](https://github.com/DevWill-hub/Sonic-Infinite-Runner-PS2)
- [The Athena Env repo, documentation included in README](https://github.com/DanielSant0s/AthenaEnv)

# Important

The version available in the repository is a stable version called AthenaEnv V4. The documentation/README has been updated to: https://github.com/DanielSant0s/AthenaEnv/blob/v4/README.md

You can still use the version available in the AthenaEnv GitHub Releases section, the most stable version, but remember to use the documentation/README already available from the beginning.
