---
title: Discord Music Bot
description: A self-hosted Discord bot that streams music from YouTube, SoundCloud, and Spotify links into voice channels.
date: 2026-10-26
stack: [Python, discord.py, yt-dlp, FFmpeg, Docker]
featured: true
---

A personal music bot for my Discord server. It streams audio with yt-dlp and FFmpeg, so nothing is downloaded to disk, and it runs in Docker on the machine that hosts it.

## Highlights

- Slash commands for the usual player controls: `/play`, `/queue`, `/skip`, `/seek`, `/loop`, `/shuffle`, and more.
- A compact player message with buttons for pause, skip, volume, seeking, lyrics, and an "Up next" menu.
- Spotify links, plus a "Follow me" mode that plays along with what someone is listening to on Spotify.
- Per-server volume and settings that survive restarts, saved playlists, and play statistics.
- Lyrics from [LRCLIB](https://lrclib.net), shown only when the artist and track length match.
- Audio effects (bass boost, nightcore, slowed + reverb, 8D) and a `/restore` command that brings back the last session's queue.
- An offline test suite that runs without a Discord connection.

<!-- Add a "What I learned" section: what was hard, and what you would do differently. -->
