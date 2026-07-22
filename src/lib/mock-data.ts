import type { TemplatesData } from './schemas';

export const mockTemplatesData: TemplatesData = {
  categories: [
    {
      slug: 'web-applications',
      name: 'Web Applications',
      description: 'HTTP servers and web APIs built with V',
      details: 'Templates for vweb/veb servers, REST APIs, and backend services in V.',
      labels: ['Web', 'HTTP', 'API', 'V', 'vweb'],
    },
    {
      slug: 'cli-applications',
      name: 'CLI Applications',
      description: 'Command-line tools with flag parsing and structured output',
      details: 'Use when the deliverable is a CLI built with V flag/cli modules.',
      labels: ['CLI', 'V', 'flag', 'Terminal'],
    },
    {
      slug: 'library-starter',
      name: 'Library Starter',
      description: 'Reusable V modules with v.mod, docs, and tests',
      details: 'Publishable libraries with examples and v test coverage.',
      labels: ['Library', 'v.mod', 'V', 'Module'],
    },
    {
      slug: 'systems-applications',
      name: 'Systems Applications',
      description: 'Low-level and performance-oriented V projects',
      details: 'Patterns for systems programming, optional -gc none, and native tooling.',
      labels: ['Systems', 'Performance', 'V', 'Native'],
    },
    {
      slug: 'ci',
      name: 'CI',
      description: 'Continuous integration and repository automation',
      details: 'GitHub Actions with vlang/setup-v, MegaLinter, and related workflows.',
      labels: ['CI', 'GitHub', 'DevOps', 'setup-v'],
    },
    {
      slug: 'containers',
      name: 'Containers',
      description: 'Docker and Compose packaging for V apps',
      details: 'Add when you want container images and compose stacks.',
      labels: ['Docker', 'Compose', 'DevOps'],
    },
  ],
  templates: [
    {
      slug: 'web-server',
      name: 'Web Server',
      description: 'vweb/veb HTTP server starter with v.mod, v fmt/vet, and v test',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web-applications',
      labels: ['V', 'vweb', 'HTTP', 'API', 'Web'],
    },
    {
      slug: 'cli-app',
      name: 'CLI App',
      description: 'CLI starter with flag parsing, structured logging, and v test',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/cli-app',
      type: 'cli-app',
      category: 'cli-applications',
      labels: ['CLI', 'V', 'flag', 'Terminal'],
    },
    {
      slug: 'library-starter',
      name: 'Library Starter',
      description: 'v.mod library with docs, examples, and v test harness',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=templates/library-starter',
      type: 'library',
      category: 'library-starter',
      labels: ['Library', 'v.mod', 'V', 'Module'],
    },
  ],
  extensions: [
    {
      slug: 'github-setup',
      name: 'GitHub Setup',
      description: 'GitHub Actions CI with vlang/setup-v, issue/PR templates, and Dependabot',
      url: 'https://github.com/Create-Vlang-App/cva-templates?subdir=extensions/github-setup',
      type: ['web-server', 'cli-app', 'library', 'systems-app'],
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
      type: ['web-server', 'cli-app', 'library', 'systems-app'],
      category: 'ci',
      labels: ['v fmt', 'v vet', 'Hooks', 'Quality'],
    },
  ],
};

// Helper function to get fallback data if API fails
export function getFallbackData(): TemplatesData {
  return mockTemplatesData;
}
