---
title: PokePy
description: A Python and pygame re-implementation of the Pokémon Red game engine, built by reading the pret/pokered disassembly.
date: 2026-10-24
stack: [Python, pygame]
featured: true
---

PokePy rebuilds the Game Boy engine of Pokémon Red in Python. The overworld, battle engine, menus, and save system are new Python code. The original story scripts run unchanged on a small interpreter for the Game Boy's SM83 CPU.

## Highlights

- No ROM data ships with the project. An extraction tool reads a checkout of the [pret/pokered](https://github.com/pret/pokered) disassembly and generates the JSON data tables and graphics.
- The type chart and the split Special Attack and Special Defense stats come from Generation 2, through the pret/pokecrystal disassembly.
- 240 Generation 1 and 2 Pokémon can be caught across Kanto, Johto, and the Sevii Islands, and each of the 46 routes has its own habitat.
- Keyboard and gamepad controls can all be remapped.

Pokémon is a trademark of Nintendo, Creatures Inc., and GAME FREAK inc. PokePy is an unofficial fan project for learning.

<!-- Add a "What I learned" section: what was hard, and what you would do differently. -->
