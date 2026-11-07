---
title: cosmic
description: Real-time visual effects (plasma, fire, and a 6,000-star galaxy) simulated in NumPy and drawn at 60 fps in a plain tkinter window.
date: 2026-10-22
stack: [Python, NumPy, tkinter]
---

Three demoscene-style effects with no game engine and no OpenGL, only NumPy and the tkinter window that ships with Python.

- **Plasma**: the classic sum-of-sines field with a cycling rainbow palette. The mouse drops a ripple into it.
- **Fire**: a heat field with a hot, noisy bottom row that rises, drifts sideways, and cools at random.
- **Galaxy**: 6,000 stars in circular orbits around a center of mass, drawn with trails. The mouse is a second attractor, and a click sets off a supernova.

A full frame takes about 2 ms, which leaves around 7x headroom at 60 fps. The note [Raw PPM beats PNG for fast frames in tkinter](/notes/ppm-beats-png-in-tkinter/) explains how.

<!-- Add a "What I learned" section: what was hard, and what you would do differently. -->
