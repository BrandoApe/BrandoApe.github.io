# Portfolio

A minimal personal site for projects and notes. The site uses [Astro](https://astro.build) and deploys to GitHub Pages. Pages ship as static HTML. The only client JavaScript is a short inline script for the light and dark theme switch.

## Run the site on your computer

1. Install Node.js 22.22 or later.
2. Run `npm install`.
3. Run `npm run dev`, then open http://localhost:4321.

| Command           | Action                                                      |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Start a local server. The page reloads after each change.  |
| `npm run build`   | Build the site into `dist/`.                                |
| `npm run preview` | Serve the build in `dist/`.                                 |
| `npm run check`   | Check the types in the `.astro` and `.ts` files.            |

## Add a project

Add a Markdown file to `src/content/projects/`. The file name sets the URL. For example, `pokepy.md` becomes `/projects/pokepy/`.

```md
---
title: My Project
description: One sentence that tells what the project does.
date: 2026-11-01
stack: [Python, Docker] # optional
repo: https://github.com/BrandoApe/my-project # optional
demo: https://example.com # optional
featured: true # optional: show the project on the home page
---

Write about the project here.
```

The page of a project shows `repo` and `demo` as the links "Source" and "Live site", beside the year and the stack.

## Add a note

Add a Markdown file to `src/content/notes/`. You can put notes in subfolders. The home page shows the five newest notes.

```md
---
title: What I learned about X
description: One sentence. It shows below the title, in the list of notes, and in link previews. # optional
date: 2026-11-01
tags: [python, algorithms] # optional
---

Write the note here. Code blocks get syntax colors in light and dark mode.
```

Use lowercase words for tags. Each tag gets a page at `/notes/tags/<tag>/`.

When a project or note has two or more `##` headings, a wide screen shows them beside the text as "On this page".

The schema in `src/content.config.ts` checks the frontmatter. If a field is wrong or missing, the build stops and names the field.

## Change the site details

- The name, the description, the top menu, and the links to your profiles: `src/site.ts`. To add a profile, such as LinkedIn, add a line to `links`. It then shows beside the introduction and in the footer.
- The text on the home page: `src/pages/index.astro`.
- The colors: the variables at the top of `src/styles/global.css`. Each color has a light value and a dark value. `--accent` is the one accent color.
- The fonts: `fonts` in `astro.config.mjs`. The font files come from the `@fontsource` packages, so a build needs no network.
- The icon in the browser tab and in the header: `public/favicon.svg` and `src/components/Header.astro`.

## How the pages are laid out

Every page uses the same grid: a narrow rail for labels and details, and one column for reading. On a narrow screen the rail moves into the column.

- `src/layouts/Base.astro` holds the `<head>`, the header, and the footer.
- `src/components/Page.astro` is the grid of a page: a heading, the rail, and the content.
- `src/components/Band.astro` is one labeled section of the home page.
- `src/components/TagMenu.astro`, `Toc.astro`, and `Pager.astro` are the menus: the tags, "On this page", and the links to the newer and older entry.

Motion is small on purpose. A change of page fades for a moment, and the line under the current menu item slides to its new place. Links change color on hover. All of it stops when the system asks for reduced motion.

## The link preview image

`public/og.png` is the image that shows when someone shares a link to the site. Its source is `scripts/og.html`. After you change that file, make the image again with Chrome or Chromium:

```sh
google-chrome --headless --hide-scrollbars --window-size=1200,630 --screenshot=public/og.png scripts/og.html
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site after each push to `main`.

1. Make a public repository with the name `BrandoApe.github.io`. A free GitHub plan publishes Pages only from public repositories.
2. In the repository, open **Settings → Pages**. Set **Source** to **GitHub Actions**.
3. Push this folder to the `main` branch.

The site is then live at https://brandoape.github.io.

If you use a different repository name, GitHub serves the site from a subpath, for example `https://brandoape.github.io/portfolio/`. Then you must set `base` in `astro.config.mjs` and add the base to each internal link. The `BrandoApe.github.io` name does not need these changes.

## Update Astro

Astro 7.4.2 and later need Node.js 22.23.4 or later. The Node.js on this computer is 22.22.2, so `package-lock.json` keeps Astro at 7.4.1. After you update Node.js, run `npm install astro@latest`. The GitHub workflow uses Node.js 24.
