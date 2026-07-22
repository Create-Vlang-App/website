<div align="center">

# Create Vlang App — Website

**Docs and catalog site for the Create Vlang App scaffolding toolkit.**

[![Website](https://img.shields.io/badge/site-create--awesome--vlang--app.vercel.app-8B5CF6?style=flat-square)](https://create-awesome-vlang-app.vercel.app)
[![CLI](https://img.shields.io/badge/CLI-create--vlang--app-4B6EAF?style=flat-square)](https://github.com/Create-Vlang-App/create-vlang-app)
[![Templates](https://img.shields.io/badge/templates-cva--templates-blue?style=flat-square)](https://github.com/Create-Vlang-App/cva-templates)
[![Release](https://img.shields.io/github/v/release/Create-Vlang-App/create-vlang-app?filter=create-vlang-app%40*&style=flat-square&label=Release)](https://github.com/Create-Vlang-App/create-vlang-app/releases/tag/create-vlang-app%400.1.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1527933660764831825?style=flat-square&label=Discord&logo=discord&logoColor=white)](https://discord.gg/dwFTsR7fK2)

**Live site:** [create-awesome-vlang-app.vercel.app](https://create-awesome-vlang-app.vercel.app)

[CLI](https://github.com/Create-Vlang-App/create-vlang-app) · [Templates](https://github.com/Create-Vlang-App/cva-templates) · [Catalog](https://create-awesome-vlang-app.vercel.app/templates) · [Extensions](https://create-awesome-vlang-app.vercel.app/extensions)

</div>

---

## Install the CLI

Prefer the GitHub Release binary (linux amd64) from [`create-vlang-app@0.1.0`](https://github.com/Create-Vlang-App/create-vlang-app/releases/tag/create-vlang-app%400.1.0):

```bash
curl -fsSL -o create-vlang-app \
  "https://github.com/Create-Vlang-App/create-vlang-app/releases/download/create-vlang-app%400.1.0/create-vlang-app-linux-x86_64"
chmod +x create-vlang-app
sudo mv create-vlang-app /usr/local/bin/

create-vlang-app my-app --template web-server --addons github-setup
```

Other install paths:

| Channel  | How                                                              |
| -------- | ---------------------------------------------------------------- |
| Homebrew | `brew tap Create-Vlang-App/tap && brew install create-vlang-app` |
| AUR      | `yay -S create-vlang-app`                                        |
| Source   | `git clone …/create-vlang-app && make build`                     |

When published on VPM: `v install create-vlang-app`.

## Catalog

Vendored copy of the official bank registry:

- [`public/data/templates.json`](public/data/templates.json)
- Source of truth: [cva-templates](https://github.com/Create-Vlang-App/cva-templates)
- Browse live: [create-awesome-vlang-app.vercel.app/templates](https://create-awesome-vlang-app.vercel.app/templates)

## Development

```bash
pnpm install
pnpm dev
```

## Related

- [create-vlang-app](https://github.com/Create-Vlang-App/create-vlang-app) — CLI
- [cva-templates](https://github.com/Create-Vlang-App/cva-templates) — templates & extensions
- [Create-Vlang-App org](https://github.com/Create-Vlang-App)
