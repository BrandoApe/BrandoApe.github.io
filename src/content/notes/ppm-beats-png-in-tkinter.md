---
title: Raw PPM beats PNG for fast frames in tkinter
description: In my tkinter effects demo, most of each frame's time went to image encoding, not to the simulation.
date: 2026-10-22
tags: [python, performance]
---

For [cosmic](/projects/cosmic/), I draw NumPy-simulated effects into a plain tkinter window. The first draft capped out near 70 fps. The bottleneck was not the simulation. It was handing each frame to Tk.

The first draft encoded every frame as a PNG for `tk.PhotoImage`. Even at `compress_level=1`, encoding the PNG and letting Tk decode it again cost about 10–12 ms per frame.

PPM is about the simplest image format there is: a short text header, then the raw RGB bytes. Tk reads it with no decompression:

```python
def ppm_bytes(rgb):  # rgb is an (h, w, 3) uint8 array
    h, w = rgb.shape[:2]
    return b"P6\n%d %d\n255\n" % (w, h) + rgb.tobytes()

photo = tk.PhotoImage(data=ppm_bytes(rgb), format="ppm").zoom(4)
```

That path is about 5x faster than PNG. A full frame now takes about 2 ms: under 1 ms of simulation and about 1.5 ms to upload and scale up. That leaves about 7x headroom at 60 fps.

## Other things that helped

- **Simulate small, scale up big.** The effects run at 240×150, and Tk's built-in `zoom(4)` scales them to the 960×600 window.
- **No Python loops over pixels or particles.** Gravity, movement, and trails are each one vectorized NumPy statement over flat `float32` arrays.
- **`np.bincount` with weights** adds every star's brightness into the frame buffer in one pass. It is much faster than `np.add.at`.
- **Color through a lookup table.** `palette[field]` maps a whole 8-bit intensity field to RGB with one index operation.

## Takeaway

Time each stage of the frame before you optimize. The slow part was the hand-off between libraries, not the math.
