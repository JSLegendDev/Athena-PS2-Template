# Athena PS2 Template

This is a template you can use to make games for the PS2 (Playstation 2) using the JavaScript programming language.
This is made possible by the Athena engine.

# How to Run?

Assuming that you have a working PCSX2 emulator on your machine and that you have enabled the
checkbox "Enable host filesystem" under Settings > Emulation.

Open the `athena.elf` file available in this template in the emulator.
In PCSX2, you can achieve this under System > Start File... by selecting the `athena.elf` file using the File Explorer.

# How to Make an .iso?

You might want to build a single .iso file you can distribute your game as.
To achieve this, create a zip of all the files present in this template.
This includes your source code, `athena.elf`, `athena.ini`, `ATHA_000.01` and `SYSTEM.CNF`.
Exclude this readme.

Make sure to create the zip archive by selecting each file and folder one by one rather than zipping the outer folder
containing everything. It might still work, but I only had success with the former method.

Once the zip is created, you can convert it into an `.iso` with this website https://mconverter.eu/.
If you know of other alternatives that successfully builds an `.iso` that runs, feel free to make a pull request.

Once the `.iso` is created, you can open it up in the emulator like you would any other PS2 game.
