---
title: Insertion sort beats quicksort on almost-sorted data
description: Benchmarks from my C++ sort profiler show that the fastest algorithm depends on the input.
date: 2026-10-18
tags: [c++, algorithms]
---

I wrote a C++ profiler that times five sorts (bubble, insertion, selection, merge, and quick) and counts their comparisons and assignments. I ran each one on random arrays and on almost-sorted arrays: a sorted array with one random pair of values swapped.

Results at n = 10,000:

| Algorithm | Random (ms) | Almost sorted (ms) |
| --------- | ----------: | -----------------: |
| Bubble    |       289.9 |              117.7 |
| Insertion |        97.0 |               0.12 |
| Selection |       120.1 |              119.3 |
| Merge     |        1.51 |               0.96 |
| Quick     |        1.35 |              298.8 |

## Insertion sort was the fastest of all five

Insertion sort's inner loop stops as soon as an element is not smaller than the one to its left. On almost-sorted data, nearly every element stops at once, so the sort does about *n* comparisons instead of about *n*²/4. It made 26,078 comparisons here, against 25 million on random data.

## Quicksort was the slowest of all five

My partition is Lomuto with the last element as the pivot. In sorted data, the last element is the largest, so each partition splits off just one element. The work becomes O(*n*²), and the recursion goes 8,232 levels deep. A random or median-of-three pivot fixes this.

## Selection sort did not care

Selection sort always does *n*(*n* − 1)/2 comparisons, which is 49,995,000 here, whatever the input looks like.

## Takeaway

Average-case Big-O is not the whole story, because real data is often partly sorted. That is why library sorts mix algorithms. Timsort finds runs that are already in order. Introsort, behind most `std::sort` implementations, switches to heapsort when quicksort's recursion gets too deep and finishes small ranges with insertion sort.
