# Create Vlang App - Official Website

[![VPM](https://img.shields.io/badge/vpm-create--vlang--app-blue?style=flat-square)](https://github.com/Create-Vlang-App/create-vlang-app)
[![Templates](https://img.shields.io/badge/templates-cva--templates-blue?style=flat-square)](https://github.com/Create-Vlang-App/cva-templates)
[![GitHub org](https://img.shields.io/badge/GitHub-Create--Vlang--App-black?style=flat-square&logo=github)](https://github.com/Create-Vlang-App)

This is the official website for [Create Vlang App](https://github.com/Create-Vlang-App/create-vlang-app), a tool that helps you quickly set up V projects with best practices and modern tooling (VPM-first).

## Project Links

- [Official website](https://create-vlang-app.vercel.app)
- [CLI module on VPM](https://github.com/Create-Vlang-App/create-vlang-app)
- [Main Create-Vlang-App repository](https://github.com/Create-Vlang-App/create-vlang-app)
- [Templates and extensions catalog](https://github.com/Create-Vlang-App/cva-templates)
- [Create-Vlang-App GitHub organization](https://github.com/Create-Vlang-App)

> [!TIP]
> Scaffold new apps with `create-vlang-app` — do not clone template snapshot repos for production work. Prefer:
>
> ```bash
> v install create-vlang-app
> create-vlang-app my-api --template web-server
> ```

## Features

- ⚡️ **Instant HMR (Hot Module Replacement)** - Leveraging Next.js for fast refreshes and updates during development.
- ⚛ **React Integration** - Utilizes [React](https://reactjs.org/) for building the user interface.
- 🦾 **TypeScript Support** - Ensures type safety with [TypeScript](https://www.typescriptlang.org/).

## Extra Documentation

Discover more about the project structure, available scripts, and much more in the [docs](./docs) folder!

## Pre-packed Development Tools

- [TypeScript](https://www.typescriptlang.org/) - For type-safe code.
- [eslint](https://eslint.org/) - A linter tool for identifying and reporting on patterns in JavaScript and JSX.
- [prettier](https://prettier.io/) - An opinionated code formatter for clean and consistent code style.
- [husky](https://www.npmjs.com/package/husky) - Simplifies the use of Git hooks in your project.
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Allows running linters on git staged files to catch errors before they're committed.

## Quick Start

```sh
fnm use
pnpm install
pnpm run dev
```

## Development Workflow

For most development work, you'll primarily use `pnpm run dev`. However, you have additional scripts at your disposal for various tasks:

| pnpm run <script>   | Description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `pnpm run dev`      | Starts the local development server for building and previewing your application.                   |
| `pnpm run format`   | Formats the codebase using [Prettier](https://prettier.io/) to ensure consistent code styling.      |
| `pnpm run lint`     | Runs linting on the codebase to identify and report on patterns with [eslint](https://eslint.org/). |
| `pnpm run lint:fix` | Automatically fixes linting errors in the codebase where possible.                                  |

## Production

Scripts for preparing and viewing the production version:

| pnpm run <script> | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `pnpm run start`  | Serves your application using the production setup, ensuring it's ready for deployment.      |
| `pnpm run build`  | Compiles the application into the `dist/` directory, preparing it for production deployment. |

## Deployment (Vercel)

Production URL (target): [https://create-vlang-app.vercel.app](https://create-vlang-app.vercel.app)

The Vercel CLI was not available in the automation environment used for this repo, so connect the GitHub project manually:

1. Sign in at [vercel.com](https://vercel.com) with a account that can manage the `Create-Vlang-App` org.
2. **Add New → Project** → import `Create-Vlang-App/website` from GitHub.
3. Framework preset: **Next.js** (defaults are fine). Build command: `pnpm run build`. Output: Next default.
4. Deploy, then open **Project Settings → Domains** and assign `create-vlang-app.vercel.app` (or confirm the auto-generated `.vercel.app` alias).
5. Optional CLI linking (when `vercel` is installed and authenticated):

```sh
pnpm dlx vercel login
pnpm dlx vercel link --project create-vlang-app
pnpm dlx vercel --prod
```

After the first production deploy succeeds, set the GitHub repository homepage to the live URL (see issue #8).

## Contributing

Bug reports, feature requests, and pull requests are welcome on the [Create-Vlang-App/website](https://github.com/Create-Vlang-App/website) repository!

## 👥 Contributors

<a href="https://github.com/Create-Vlang-App/website/contributors">
  <img src="https://contrib.rocks/image?repo=Create-Vlang-App/website" alt="Contributors to Create-Vlang-App/website"/>
</a>

Made with [contributors-img](https://contrib.rocks).
