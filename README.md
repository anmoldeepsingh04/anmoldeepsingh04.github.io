# Anmoldeep Singh — Personal Academic Website

A static, responsive academic homepage built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme. It showcases a bio, news, projects, publications, a CV, and GitHub repositories, and is hosted on [GitHub Pages](https://pages.github.com/).

- **Live site:** https://anmoldeepsingh04.github.io
- **Owner:** Anmoldeep Singh — Innovation Engineer, Thermax Limited (Computational Science, CFD, ML for energy & sustainability)
- **Stack:** Ruby/Jekyll, Liquid templates, SCSS (Bootstrap + MDB), GitHub Pages, MathJax, Chart.js/Vega/Mermaid

---

## Table of Contents

- [What this repository is](#what-this-repository-is)
- [Directory structure](#directory-structure)
- [How the site is built (pipeline)](#how-the-site-is-built-pipeline)
- [Content sources & data flow](#content-sources--data-flow)
- [Collections & pages](#collections--pages)
- [Templates, layout & includes](#templates-layout--includes)
- [Custom plugins](#custom-plugins)
- [Configuration](#configuration)
- [Theme, styling & third‑party libraries](#theme-styling--third-party-libraries)
- [Local development](#local-development)
- [Deployment](#deployment)
- [Quality checks & CI](#quality-checks--ci)
- [Quick reference: where to edit what](#quick-reference-where-to-edit-what)

---

## What this repository is

This is a **content-driven static website**. Almost everything you see on the site is generated from plain-text files (Markdown, YAML, BibTeX, JSON) stored in this repo. There is no database and no server-side code — Jekyll compiles everything into static HTML/CSS/JS at build time, and GitHub Pages serves the result.

The mental model is:

```
author writes content  →  Jekyll + plugins transform it  →  static site in _site/  →  GitHub Pages serves it
```

---

## Directory structure

```
.
├── _config.yml              # Central configuration: identity, socials, collections, scholar, libs, plugins
├── Gemfile / Gemfile.lock   # Ruby dependencies (Jekyll + plugins)
├── package.json             # Node deps (prettier, purgecss, etc.) for tooling
├── Dockerfile               # Containerized build environment
├── docker-compose*.yml
├── bin/                     # Helper shell scripts (cibuild, deploy, entry_point.sh)
├── _data/                   # Structured data (YAML/JSON) injected into templates
│   ├── cv.yml               # CV sections (fallback when JSON resume absent)
│   ├── socials.yml          # Social/contact links shown in footer/header
│   ├── repositories.yml     # GitHub users/repos for the /repositories/ page
│   ├── coauthors.yml        # Co-author display names/initials for publications
│   └── venues.yml           # Journal/conference venue abbreviations
├── _bibliography/
│   └── papers.bib           # BibTeX source → rendered into /publications/ by jekyll-scholar
├── _news/                   # "news" collection: announcement_*.md (home + /news/)
├── _projects/               # "projects" collection: 1_project.md … (grid on /projects/)
├── _posts/                  # Blog posts (kramdown), paginated at /blog/
├── _pages/                  # Static pages (about=home, projects, news, cv, repositories, 404)
├── _layouts/                # Page templates (default, about, page, post, cv, bib, distill, profiles)
├── _includes/               # Reusable Liquid partials (header, footer, news, projects, social, figure…)
│   ├── cv/                  # CV rendering partials (list, time_table, map, …)
│   ├── resume/              # JSON-Resume partials (basics, work, education, …)
│   └── repository/          # GitHub stats partials (repo_user, repo, trophies)
├── _sass/                   # SCSS source (compiled to assets/css/main.css)
│   ├── _themes.scss         # Color themes (--global-theme-color, light/dark)
│   ├── _variables.scss      # SCSS variables
│   ├── _base.scss           # Base styles
│   ├── _cv.scss, _distill.scss, _tabs.scss, _typograms.scss, _layout.scss
│   ├── font-awesome/        # Font Awesome icon CSS/webfonts
│   └── tabler-icons/        # Tabler icon webfonts
├── _plugins/                # Custom Jekyll Ruby plugins (*.rb)
├── _scripts/
│   └── search.liquid.js     # Client-side search behavior (when enabled)
├── assets/                  # Static assets (committed to repo, copied as-is)
│   ├── img/                 # Images (profile pic, project thumbnails, news media)
│   ├── js/                  # JavaScript bundles
│   ├── css/                 # Compiled/vendored CSS (bootstrap, mdb, main.scss…)
│   ├── fonts/ , webfonts/   # Icon & text fonts
│   ├── pdf/                 # CV PDF and publication PDFs
│   ├── json/                # resume.json (JSON Resume) + table_data.json
│   ├── audio/ , video/      # Media used in posts/projects
│   ├── bibliography/        # Per-post .bib files
│   ├── jupyter/             # Exported Jupyter notebooks
│   └── plotly/              # Plotly assets
├── .github/
│   ├── workflows/           # CI/CD (deploy, broken-links, prettier, lighthouse, codeql…)
│   ├── ISSUE_TEMPLATE/      # Bug/feature issue templates
│   └── stale.yml, release.yml
├── _site/                   # Build output (generated; not committed)
├── CUSTOMIZE.md, INSTALL.md, FAQ.md, CONTRIBUTING.md   # Upstream guides
└── README.md                # This file
```

---

## How the site is built (pipeline)

1. **Authoring** — You edit Markdown pages, collection items, YAML data, and the BibTeX file in the repo.
2. **Build** — Running `bundle exec jekyll build` (or `jekyll serve` for live preview) launches the Jekyll engine:
   - Reads `_config.yml` for global settings, collection definitions, and plugin list.
   - Loads every `_pages/*`, `_posts/*`, `_news/*`, `_projects/*`, and `_data/*` file into an in-memory site object (`site.pages`, `site.posts`, `site.news`, `site.projects`, `site.data.*`).
   - Applies the **Liquid layout** declared in each file's front matter, rendering shared **includes** (header/footer/scripts) around the page content.
   - Compiles SCSS in `_sass/` (and `assets/css/main.scss`) into `assets/css/main.css`.
   - Runs the configured **plugins** (see below) — e.g. `jekyll-scholar` turns `papers.bib` into the publications list, `jekyll-paginate-v2` paginates the blog, `jekyll-archives` builds tag/category/year archives, `jekyll-imagemagick` creates responsive WebP images, `terser`/`jekyll-minifier` minify JS/CSS/HTML.
   - Writes the resulting static site into `_site/`.
3. **Deploy** — `_site/` is published to GitHub Pages (see [Deployment](#deployment)).
4. **Serve** — GitHub Pages serves the static files; the browser loads CSS/JS from `assets/` and renders MathJax, charts, galleries, and dark/light theming client-side.

---

## Content sources & data flow

The site is wired together primarily through Jekyll **collections**, **data files**, and **Liquid includes**. The diagram below summarizes how each content source flows into the rendered pages.

```
_config.yml  ──┐
               ├──► site.* variables (identity, socials, scholar, libs)
_data/*.yml  ──┤        │
               │        ├──► socials.yml  ─► _includes/social.liquid ─► header/footer/about
               │        ├──► repositories.yml ─► /repositories/ page (via _includes/repository/*)
               │        ├──► cv.yml ─► /cv/ page (fallback)        └─► coauthors/venues used by bib layout
               │
_pages/about.md (permalink: /)  = HOME
   ├─ profile block ─► _includes/figure.liquid (assets/img/prof_pic.jpg)
   ├─ {{ content }}  ─► bio written in about.md
   ├─ news.liquid limit=true ─► site.news (from _news/*)   ─► home "news" section
   ├─ latest_posts.liquid ─► site.posts (from _posts/*)
   └─ social.liquid ─► site.data.socials

_news/announcement_*.md  ──collection──► site.news ──► home (limit) AND /news/ (_pages/news.md → news.liquid)

_projects/*.md  ──collection──► site.projects ──► /projects/ (_pages/projects.md → projects.liquid cards)

_posts/*.md  ──collection(posts)──► site.posts ──► /blog/ (paginated) + archives (jekyll-archives)

_bibliography/papers.bib ──jekyll-scholar──► /publications/ (bib.liquid layout, grouped by year)
   ├─ coauthors.yml / venues.yml enrich author & venue rendering
   └─ badges (Altmetric/Dimensions/Scholar/InspireHEP) via _plugins (google-scholar-citations.rb, …)

_data/cv.yml  ──► /cv/ (cv.liquid + _includes/cv/*)
assets/json/resume.json ──jekyll_get_json──► site.data.resume ──► /cv/ (preferred; JSON Resume format)
```

Key linkage points:

- **`_config.yml` is the hub.** It defines `collections`, `plugins`, the `scholar` block, `announcements`, `latest_posts`, `third_party_libraries`, and all `site.*` settings consumed by layouts/includes.
- **Collections become `site.<name>`.** `_news/` → `site.news`, `_projects/` → `site.projects`, `_posts/` → `site.posts`. Pages iterate over these in Liquid (e.g. `site.projects | sort: "importance"`).
- **Pages pull in partials.** `_pages/projects.md` calls `{% include projects.liquid %}`; `_pages/news.md` calls `{% include news.liquid %}`; the about page embeds news, social, and (optionally) selected papers.
- **Publications are decoupled.** `papers.bib` is the single source of truth for publications; `jekyll-scholar` renders it. Cross-references to PDFs, slides, code, etc. live as extra BibTeX fields (`pdf`, `code`, `slides`, `arxiv`, …) pointing into `assets/`.
- **CV has two paths.** Preferred: `assets/json/resume.json` (JSON Resume standard) loaded by the `jekyll_get_json` plugin into `site.data.resume` and rendered via `_includes/resume/*`. Fallback: `_data/cv.yml` rendered via `cv.liquid` + `_includes/cv/*`.
- **Static assets** in `assets/` are referenced by path from templates/content (e.g. `assets/img/prof_pic.jpg`, `assets/pdf/Curriculum_Vitae.pdf`).

---

## Collections & pages

| Path                      | Type       | Permalink               | Rendered by          | Notes                                       |
| ------------------------- | ---------- | ----------------------- | -------------------- | ------------------------------------------- |
| `_pages/about.md`         | page       | `/` (home)              | `about` layout       | Bio, profile image, news feed, socials      |
| `_pages/projects.md`      | page       | `/projects/`            | `page` layout        | Grid of `_projects/*` (masonry if enabled)  |
| `_pages/news.md`          | page       | `/news/`                | `page` layout        | Full news list (`news.liquid`)              |
| `_pages/cv.md`            | page       | `/cv/`                  | `cv` layout          | CV from `cv.yml` or `resume.json`; PDF link |
| `_pages/repositories.md`  | page       | `/repositories/`        | `page` layout        | GitHub stats from `repositories.yml`        |
| `_pages/404.md`           | page       | `/404.html`             | `page` layout        | Not-found page                              |
| `_news/announcement_*.md` | collection | `/news/<title>/`        | `post` layout        | Announcements; shown on home (limited)      |
| `_projects/*.md`          | collection | `/projects/<title>/`    | `page`/`post` layout | Project cards; `importance` controls order  |
| `_posts/*.md`             | posts      | `/blog/<year>/<title>/` | `post` layout        | Blog; paginated + archived by tag/year      |

Collections are declared in `_config.yml` under `collections:` with `output: true` and a `permalink` pattern. The `announcements:` and `latest_posts:` blocks control how many items surface on the home page.

---

## Templates, layout & includes

Jekyll uses a **layout chain**: a page's `layout:` front-matter value points to a file in `_layouts/`. Layouts can extend other layouts (e.g. `about.liquid` has `layout: default`).

- **`_layouts/default.liquid`** — the HTML skeleton: `<head>` (via `head.liquid`), header, main content container (with optional TOC sidebar), footer, and scripts (`scripts.liquid`). Handles redirects.
- **`_layouts/about.liquid`** — home page: profile figure, bio, news, latest posts, selected papers, social block.
- **`_layouts/page.liquid`** — generic static page; supports a navbar item (`nav`, `nav_order`) and a `description`.
- **`_layouts/post.liquid`** — blog post + news item; includes related posts, comments (giscus/disqus), and metadata.
- **`_layouts/bib.liquid`** — publication entry rendering (badges, abstracts, links); heavily customized for al-folio.
- **`_layouts/cv.liquid`** — CV page; iterates `site.data.cv` or `site.data.resume`.
- **`_layouts/distill.liquid`** — Distill.pub-style posts (`<d-*>` tags).
- **`_layouts/profiles.liquid`**, `archive-year/tag/category.liquid` — people page and blog archives.

**Includes** (`_includes/*.liquid`) are the reusable building blocks: `header.liquid`, `footer.liquid`, `head.liquid`, `scripts.liquid`, `news.liquid`, `projects.liquid`, `projects_horizontal.liquid`, `social.liquid`, `figure.liquid` (responsive images), `latest_posts.liquid`, `related_posts.liquid`, `selected_papers.liquid`, `citation.liquid`, `video.liquid`, `audio.liquid`, `giscus.liquid`, `disqus.liquid`, `newsletter.liquid`, plus the `cv/` and `resume/` and `repository/` subfolders.

---

## Custom plugins

Beyond the gems in `Gemfile` (jekyll-scholar, jekyll-feed, jekyll-paginate-v2, jekyll-archives, jekyll-imagemagick, jekyll-minifier, terser, jemoji, etc.), this repo ships custom Ruby plugins in `_plugins/`:

| Plugin                        | Purpose                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `cache-bust.rb`               | Appends content hashes to asset URLs to defeat browser caching                       |
| `details.rb`                  | Adds a `<details>`/`summary` block tag for collapsible content                       |
| `download-3rd-party.rb`       | Downloads third-party JS/CSS libraries listed in `_config.yml` for local/offline use |
| `external-posts.rb`           | Pulls in blog posts from external RSS feeds (`external_sources` in config)           |
| `file-exists.rb`              | Liquid filter/`file_exists` helper to check asset existence at build time            |
| `google-scholar-citations.rb` | Fetches citation counts for publications (Google Scholar badge)                      |
| `hide-custom-bibtex.rb`       | Filters internal BibTeX keywords out of rendered `.bib` output                       |
| `inspirehep-citations.rb`     | Fetches citation counts from INSPIRE-HEP (InspireHEP badge)                          |
| `remove-accents.rb`           | Normalizes author names (strips diacritics) for scholar matching                     |
| `terser.rb`                   | Minifies JavaScript via Terser during the build                                      |

---

## Configuration

All site-wide behavior is controlled from `_config.yml`. Notable sections:

- **Site settings** — `title`, `first_name`/`last_name`, `email`, `description`, `url`, `baseurl`, `icon`, `max_width`.
- **Social integration** — many `*_username`/`*_id` fields; the active ones are mirrored in `_data/socials.yml` for display.
- **Analytics** — `google_analytics` ID is set (`G-CKHMC4GMEW`), but `enable_google_analytics` is `false` (toggle to activate).
- **Blog** — `blog_name`, `permalink: /blog/:year/:title/`, pagination, related posts, giscus/disqus, external sources.
- **Collections** — `news` and `projects` definitions; `announcements`/`latest_posts` display limits.
- **Jekyll Scholar** — `source`, `bibliography: papers.bib`, `bibliography_template: bib`, `group_by: year`, citation style (`apa`), and publication badges (Altmetric, Dimensions, Scholar, InspireHEP).
- **Optional features** — toggles for math (MathJax), dark mode, masonry, medium-zoom, progress bar, imagemagick WebP, lazy loading.
- **Third-party libraries** — pinned versions + SRI hashes for Chart.js, D3, Vega, MathJax, Mermaid, Swiper, Leaflet, Lightbox, PhotoSwipe, etc.
- **`jekyll_get_json`** — loads `assets/json/resume.json` into `site.data.resume` for the CV page.

---

## Theme, styling & third‑party libraries

- **SCSS** lives in `_sass/` and is compiled through `assets/css/main.scss` → `assets/css/main.css`.
- **Theming:** change `--global-theme-color` in `_sass/_themes.scss`; light/dark palettes are defined there and toggled client-side (`enable_darkmode: true`).
- **Frameworks:** Bootstrap 4 + MDB for layout/components; Font Awesome & Academicons & Tabler icons for social/contact icons.
- **Interactive content** is enabled per-page via `third_party_libraries` (MathJax for math, Chart.js/Vega/Mermaid for figures/diagrams, Swiper for galleries, PhotoSwipe/Lightbox for zoom, Leaflet for maps).
- **Responsive images:** `jekyll-imagemagick` generates WebP at multiple widths; `figure.liquid` emits `<picture>` with `srcset` and lazy loading.

---

## Local development

Prerequisites: Ruby, Bundler, and (optionally) Node.js + ImageMagick.

```bash
# Install Ruby dependencies
bundle install

# Serve the site locally with live reload at http://localhost:4000
bundle exec jekyll serve

# One-off build into _site/
bundle exec jekyll build
```

> The upstream repo also provides a Docker workflow (`Dockerfile`, `docker-compose.yml`) and a VS Code dev container (`.devcontainer/`) for a reproducible environment. See `INSTALL.md` for full details.

Node-based tooling (Prettier, PurgeCSS) is used for formatting and trimming unused CSS:

```bash
npm install
npx prettier --write .        # format
npx purgecss -c purgecss.config.js   # strip unused CSS (used by bin/deploy)
```

---

## Deployment

Two paths are supported:

1. **GitHub Actions (recommended).** `.github/workflows/deploy.yml` builds the site on push to the default branch and publishes it to GitHub Pages automatically. No manual step required.
2. **Manual script.** `bin/deploy` runs `jekyll build`, purges CSS, moves `_site/` to the repo root, adds a `.nojekyll` file (so GitHub Pages serves the pre-built output without re-running Jekyll), and force-pushes to the `gh-pages` branch.

In both cases the production build sets `JEKYLL_ENV=production`.

---

## Quality checks & CI

GitHub Actions in `.github/workflows/` enforce quality:

- **prettier.yml / prettier-comment-on-pr.yml** — code/formatting style.
- **broken-links.yml / broken-links-site.yml** — link checking via `lychee` (see `.lycheeignore`).
- **lighthouse-badger.yml** — performance/accessibility scores (results in `lighthouse_results/`).
- **axe.yml** — accessibility testing (manual-friendly).
- **codeql.yml** — static security analysis.
- **deploy\*.yml / docker-slim.yml** — build & container image publishing.

Pre-commit hooks are configured in `.pre-commit-config.yaml`.

---

## Quick reference: where to edit what

| I want to change…                    | Edit this                                                         |
| ------------------------------------ | ----------------------------------------------------------------- |
| Site title, name, email, description | `_config.yml` (Site settings)                                     |
| Social/contact links                 | `_data/socials.yml` (+ matching `*_username` in `_config.yml`)    |
| Home bio & profile photo             | `_pages/about.md` (text) and `assets/img/prof_pic.jpg`            |
| News items on home /news             | `_news/announcement_*.md`                                         |
| Projects grid                        | `_projects/*.md` (+ thumbnails in `assets/img/`)                  |
| Publications list                    | `_bibliography/papers.bib` (+ PDFs in `assets/pdf/`)              |
| CV content                           | `assets/json/resume.json` (preferred) or `_data/cv.yml`           |
| GitHub repos page                    | `_data/repositories.yml`                                          |
| Blog posts                           | `_posts/*.md`                                                     |
| Page nav order / new page            | `_pages/*.md` front matter (`nav`, `nav_order`)                   |
| Colors / theme                       | `_sass/_themes.scss`, `_sass/_variables.scss`                     |
| Header / footer / scripts            | `_includes/header.liquid`, `footer.liquid`, `scripts.liquid`      |
| Citation badges                      | `_plugins/google-scholar-citations.rb`, `inspirehep-citations.rb` |
| Deploy behavior                      | `bin/deploy` or `.github/workflows/deploy.yml`                    |

---

## License

The al-folio theme is distributed under the [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE). Content (text, images, publications) is the property of the site owner unless otherwise noted.
