---
title: Healer Encyclopedia Bot
description: A Discord bot that turns plain-text setup files into formatted embeds for an Old School RuneScape Barbarian Assault healer guide.
date: 2026-10-07
stack: [Python, discord.py, YAML]
---

The bot reads plain-text setup files and posts each one as a consistently formatted embed in a new channel. When a file changes, the bot edits its message in place instead of posting a new one.

- An `/import` command reads the guide's old channel once to bring the existing posts over.
- The bot needs only view, send, embed, and read-history permissions. It edits and deletes only its own messages.

<!-- Add a "What I learned" section: what was hard, and what you would do differently. -->
