<div align="center">

# Create Vlang App — Website

**Docs and catalog site for the Create Vlang App scaffolding toolkit.**

[![Website](https://img.shields.io/badge/site-create--awesome--vlang--app.vercel.app-blue?style=flat-square)](https://create-awesome-vlang-app.vercel.app)
[![CLI](https://img.shields.io/badge/CLI-create--vlang--app-4B6EAF?style=flat-square)](https://github.com/Create-Vlang-App/create-vlang-app)
[![Templates](https://img.shields.io/badge/templates-cva--templates-blue?style=flat-square)](https://github.com/Create-Vlang-App/cva-templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1527933660764831825?style=flat-square&label=Discord&logo=discord&logoColor=white)](https://discord.gg/dwFTsR7fK2)

</div>

---

## Install the CLI

Prefer the GitHub Release binary (linux amd64) from [`create-vlang-app@0.1.0`](https://github.com/Create-Vlang-App/create-vlang-app/releases/tag/create-vlang-app%400.1.0), or build from source:

```bash
git clone https://github.com/Create-Vlang-App/create-vlang-app.git
cd create-vlang-app && make build
./create-vlang-app my-app --template web-server
```

When published on VPM: `v install create-vlang-app`.

## Catalog

Vendored copy of the official bank registry:

- [`public/data/templates.json`](public/data/templates.json)
- Source of truth: [cva-templates](https://github.com/Create-Vlang-App/cva-templates)

## Development

```bash
pnpm install
pnpm dev
```

## Related

- [create-vlang-app](https://github.com/Create-Vlang-App/create-vlang-app) — CLI
- [cva-templates](https://github.com/Create-Vlang-App/cva-templates) — templates & extensions
- [Create-Vlang-App org](https://github.com/Create-Vlang-App)
