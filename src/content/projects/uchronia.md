---
title: Uchronia
description: An alternate-history sandbox. Pick a moment, take a country, give orders in plain language, and an AI game master simulates the rest of the world.
date: 2026-10-10
stack: [JavaScript, D3, Claude, Python]
featured: true
---

Uchronia is a grand-strategy sandbox that runs in the browser. You choose a starting scenario and a country, then write your orders in plain English. Claude acts as the game master: it reads the orders, decides how the other powers react, and reports what happened that turn.

## How it works

- The world map has 535 historical sectors, each with its own resources and manpower. A country is drawn as the union of the sectors it holds.
- The map uses a D3 projection. Centroids, bounds, and adjacency are pre-computed so that hit-testing stays fast.
- Each sector has a terrain rating, and sea zones and straits connect the coasts for naval movement.
- The source is plain ES modules with no npm dependencies. A small Python bundler joins them into one HTML file, keeps each module in its own scope, and fails the build on import cycles or missing exports.
- The game logic has a test suite that runs in under a second, and browser tests run against a mock of Claude.

<!-- Add a "What I learned" section: what was hard, and what you would do differently. -->
