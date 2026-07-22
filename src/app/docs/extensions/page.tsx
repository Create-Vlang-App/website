import { ArrowLeft, ArrowRight, Cloud, Code, Container, Database, Monitor, Terminal, Wrench } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Extensions | Create Vlang App Documentation',
  description:
    'Learn about extensions and how to add Docker, databases, setup-v CI, fmt/vet hooks, and Dev Containers to your V project.',
  alternates: { canonical: '/docs/extensions' },
  openGraph: {
    title: 'Extensions | Create Vlang App Documentation',
    description:
      'Learn about extensions and how to add Docker, databases, setup-v CI, fmt/vet hooks, and Dev Containers to your V project.',
    url: '/docs/extensions',
    type: 'article',
  },
};

const categories = [
  {
    name: 'Containers',
    description: 'Docker images, Compose stacks, and Dev Containers for V toolchains.',
    icon: <Container className="h-5 w-5 text-primary" />,
    examples: ['v-docker', 'development-container'],
  },
  {
    name: 'Database',
    description: 'SQLite and Postgres overlays with env samples and compose services.',
    icon: <Database className="h-5 w-5 text-primary" />,
    examples: ['v-sqlite', 'v-postgres'],
  },
  {
    name: 'CI & GitHub',
    description: 'GitHub Actions workflows using vlang/setup-v.',
    icon: <Cloud className="h-5 w-5 text-primary" />,
    examples: ['github-setup'],
  },
  {
    name: 'Tooling',
    description: 'Format, vet, and local quality gates for V projects.',
    icon: <Wrench className="h-5 w-5 text-primary" />,
    examples: ['v-fmt-vet'],
  },
  {
    name: 'Developer Experience',
    description: 'Remote development environments with the V compiler.',
    icon: <Terminal className="h-5 w-5 text-primary" />,
    examples: ['development-container'],
  },
  {
    name: 'Web & Systems',
    description: 'Add-ons commonly paired with web-server, cli-app, and systems-app starters.',
    icon: <Code className="h-5 w-5 text-primary" />,
    examples: ['v-docker', 'v-postgres', 'github-setup'],
  },
  {
    name: 'Quality',
    description: 'Hooks and Makefile targets for fmt/vet before commit.',
    icon: <Monitor className="h-5 w-5 text-primary" />,
    examples: ['v-fmt-vet'],
  },
];

export default function DocsExtensionsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Extensions</h1>
          <p className="text-lg text-muted-foreground">
            Extensions are modular add-ons you apply on top of a{' '}
            <Link href="/docs/templates" className="text-primary hover:underline">
              template
            </Link>{' '}
            to layer in Docker packaging, databases, setup-v CI, fmt/vet hooks, and more.
          </p>
        </div>

        <div className="space-y-8">
          <section id="what-is-an-extension" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">What is an extension?</h2>
            <p>
              An extension is a self-contained package that overlays a <code>template/</code> tree (and optional
              metadata) onto a scaffolded V project. Extensions are composable: you can apply multiple compatible
              extensions in a single command and they are merged intelligently.
            </p>
            <p>
              Each extension may declare which templates it is compatible with (e.g. <code>web-server</code>,{' '}
              <code>cli-app</code>, <code>systems-app</code>), so the CLI only shows relevant options for your chosen
              starter.
            </p>

            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
                <code>create-vlang-app my-app --template web-server --addons v-docker github-setup v-fmt-vet</code>
              </pre>
            </div>
          </section>

          <section id="extension-categories" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Extension categories</h2>
            <p>
              Extensions are organized into <strong>{categories.length} categories</strong> covering the most common V
              project needs.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {categories.map((cat) => (
                <Card key={cat.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {cat.icon}
                      {cat.name}
                    </CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {cat.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-1">
                          <span className="text-primary">·</span> {ex}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button asChild>
                <Link href="/extensions">
                  Browse all extensions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          <section id="how-extensions-work" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How extensions work</h2>
            <p>
              When the CLI applies an extension it merges the extension&apos;s <code>template/</code> overlay into the
              scaffolded project:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mt-2">
              <li>
                <strong>Overlay files</strong> — files under the extension&apos;s <code>template/</code> directory are
                copied onto the project root (same pattern as CNA/CPA).
              </li>
              <li>
                <strong>v.mod / docs</strong> — extensions may add Makefile targets, CI workflows, compose files, or{' '}
                <code>docs/</code> notes without replacing your app entrypoints.
              </li>
              <li>
                <strong>Compatibility</strong> — optional <code>compatibleWith</code> lists keep database overlays
                scoped to templates that need them.
              </li>
              <li>
                <strong>Incompatibilities</strong> — conflicting combinations are rejected when declared by the bank
                metadata.
              </li>
            </ol>
          </section>

          <section id="extension-structure" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Extension file structure</h2>
            <p>
              Extensions live in the <code>extensions/</code> directory of the{' '}
              <a
                href="https://github.com/Create-Vlang-App/cva-templates"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                cva-templates
              </a>{' '}
              repository:
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
                {`extensions/
└── your-extension-name/
    ├── template/         # Files merged into the generated project
    │   ├── .github/      # Optional CI workflows
    │   ├── docs/         # Optional authoring notes
    │   └── ...
    └── README.md`}
              </pre>
            </div>
          </section>

          <section id="listing-extensions" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Listing available extensions</h2>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>create-vlang-app --list-addons</code>
              </pre>
            </div>
            <p>
              Or browse the full catalogue on the{' '}
              <Link href="/extensions" className="text-primary hover:underline">
                Extensions page
              </Link>
              , where you can filter by template and category.
            </p>
          </section>

          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
            <Button variant="outline" asChild>
              <Link href="/docs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Documentation
              </Link>
            </Button>
            <Button asChild>
              <Link href="/docs/contributing">
                Contributing extensions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
