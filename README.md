# The Study Edit

A static Astro blog with a homepage and a standalone guide to Braun and Clarke’s thematic analysis.

## Run locally

Use Node.js 24 and npm. From the project folder, run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To create and preview the production site:

```sh
npm run build
npm run preview
```

Astro writes the static site to `dist/`, including `dist/index.html` and the separate post under `dist/posts/`.

## Publish on GitHub Pages

1. Extract the download and put the project files at the repository root on the `main` branch. Include `package.json`, `package-lock.json`, `astro.config.mjs`, `.nvmrc`, `.github/`, `public/`, and `src/`. Using Git preserves the folders and files whose names start with a dot.
2. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. In **Actions**, open **Deploy Astro to GitHub Pages** and choose **Run workflow** for `main`, or push another commit to `main`. The deployment job prints the published URL.

The workflow reads the site origin and base path from GitHub Pages, so links and assets work at a repository URL such as `https://username.github.io/repository/`. The workflow publishes only the built `dist/` folder.

[Astro’s GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/)

## Edit the guide

Edit `src/content/posts/thematic-analysis-braun-clarke-worked-example.md` to update both copies of the article. Its frontmatter holds the title, description, cover details, and the links featured on the homepage. If you rename a heading used in a homepage link, update its slug in `featuredTopics` and `sectionLabels`. For an additional post, create another Markdown file in that folder using the same frontmatter structure. Astro builds its page at `/posts/<filename>.html`.

The homepage is in `src/pages/index.astro`, the shared page layout is in `src/layouts/SiteLayout.astro`, and the stylesheet is in `src/styles/site.css`.
