import type { TemplatesData } from './schemas';

export const mockTemplatesData: TemplatesData = {
  categories: [
    {
      slug: 'web',
      name: 'Web',
      description: 'HTTP servers and web-facing V apps.',
      details: 'veb/vweb starters and related HTTP tooling.',
      labels: ['web', 'http', 'veb'],
    },
    {
      slug: 'cli',
      name: 'CLI',
      description: 'Command-line applications.',
      details: 'Flag parsing, subcommands, and operator-friendly CLIs.',
      labels: ['cli', 'tooling'],
    },
    {
      slug: 'library',
      name: 'Library',
      description: 'Publishable V modules and libraries.',
      details: 'v.mod-first packages with tests and examples.',
      labels: ['library', 'vpm'],
    },
    {
      slug: 'systems',
      name: 'Systems',
      description: 'Systems-oriented and low-level starters.',
      details: 'GC guidance, checksums, and systems utilities.',
      labels: ['systems', 'low-level'],
    },
    {
      slug: 'ci',
      name: 'CI & tooling',
      description: 'GitHub Actions, fmt/vet, and quality gates.',
      details: 'Cross-cutting extensions for CI and local quality.',
      labels: ['ci', 'github', 'fmt'],
    },
    {
      slug: 'containers',
      name: 'Containers',
      description: 'Docker and development containers.',
      details: 'Dockerfile, compose, and .devcontainer overlays.',
      labels: ['docker', 'devcontainer'],
    },
  ],
  templates: [
    {
      slug: 'web-server',
      name: 'Web Server',
      description: 'vweb/veb HTTP server starter with v.mod, v fmt/vet, and v test',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web',
      labels: ['V', 'vweb', 'HTTP', 'API', 'Web'],
    },
    {
      slug: 'cli-app',
      name: 'CLI App',
      description: 'CLI starter with flag parsing, structured logging, and v test',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/cli-app',
      type: 'cli-app',
      category: 'cli',
      labels: ['CLI', 'V', 'flag', 'Terminal'],
    },
    {
      slug: 'library-starter',
      name: 'Library Starter',
      description: 'v.mod library with docs, examples, and v test harness',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/library-starter',
      type: 'library-starter',
      category: 'library',
      labels: ['Library', 'v.mod', 'V', 'Module'],
    },
  ],
  extensions: [
    {
      slug: 'github-setup',
      name: 'GitHub Setup',
      description: 'GitHub Actions CI with vlang/setup-v, issue/PR templates, and Dependabot',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/github-setup',
      type: ['web-server', 'cli-app', 'library-starter', 'systems-app'],
      category: 'ci',
      labels: ['GitHub', 'CI', 'DevOps', 'setup-v'],
    },
    {
      slug: 'v-docker',
      name: 'V Docker',
      description: 'Dockerfile and Compose for V binaries and dev workflows',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/v-docker',
      type: ['web-server', 'cli-app', 'systems-app'],
      category: 'containers',
      labels: ['Docker', 'DevOps', 'Container', 'V'],
    },
    {
      slug: 'v-fmt-vet',
      name: 'V Fmt & Vet',
      description: 'Pre-commit hooks for v fmt and v vet',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/v-fmt-vet',
      type: ['web-server', 'cli-app', 'library-starter', 'systems-app'],
      category: 'ci',
      labels: ['v fmt', 'v vet', 'Hooks', 'Quality'],
    },
  ],
};

// Helper function to get fallback data if API fails
export function getFallbackData(): TemplatesData {
  return mockTemplatesData;
}
