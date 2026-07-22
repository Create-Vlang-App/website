import { ArrowLeft, ArrowRight, Globe, Layers, Package, Server, Settings, Terminal, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getTemplatesData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Templates | Create Vlang App Documentation',
  description: 'Learn about the available project templates and how to use them with create-vlang-app.',
  alternates: { canonical: '/docs/templates' },
  openGraph: {
    title: 'Templates | Create Vlang App Documentation',
    description: 'Learn about the available project templates and how to use them with create-vlang-app.',
    url: '/docs/templates',
    type: 'article',
  },
};

const typeIcons: Record<string, React.ReactNode> = {
  'web-server': <Server className="h-5 w-5 text-primary" />,
  'cli-app': <Terminal className="h-5 w-5 text-primary" />,
  library: <Package className="h-5 w-5 text-primary" />,
  'systems-app': <Settings className="h-5 w-5 text-primary" />,
  'vsl-starter': <Zap className="h-5 w-5 text-primary" />,
  'vtl-starter': <Globe className="h-5 w-5 text-primary" />,
  'rxv-starter': <Layers className="h-5 w-5 text-primary" />,
};

export default async function DocsTemplatesPage() {
  const data = await getTemplatesData();
  const templates = data.templates;

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Templates</h1>
          <p className="text-lg text-muted-foreground">
            Project templates are the starting point for every <code>create-vlang-app</code> project. Each template is a
            complete, production-ready <code>v.mod</code> skeleton for a specific V stack.
          </p>
        </div>

        <div className="space-y-8">
          <section id="what-is-a-template" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">What is a template?</h2>
            <p>
              A template provides the initial directory structure, <code>v.mod</code>, configuration files, and tooling
              for a new project. When you run <code>create-vlang-app</code>, you pick a template and optionally layer{' '}
              <Link href="/docs/extensions" className="text-primary hover:underline">
                extensions
              </Link>{' '}
              on top to add Docker, CI, database overlays, or fmt/vet hooks.
            </p>

            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
                <code>create-vlang-app my-app --template web-server</code>
              </pre>
            </div>

            <p>
              Wave-1 templates include <code>web-server</code>, <code>cli-app</code>, <code>library-starter</code>, and{' '}
              <code>systems-app</code>. Growth templates such as <code>vsl-starter</code>, <code>vtl-starter</code>, and{' '}
              <code>rxv-starter</code> land after the core CLI stabilizes.
            </p>
          </section>

          <section id="available-templates" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Available templates</h2>
            <p>
              Templates are maintained in{' '}
              <a
                href="https://github.com/Create-Vlang-App/cva-templates"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                cva-templates
              </a>
              . There are currently <strong>{templates.length} templates</strong> in the catalog (fallback data shown
              when the remote JSON is unavailable).
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              {templates.map((t) => (
                <Card key={t.slug}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      {typeIcons[t.type] ?? <Layers className="h-5 w-5 text-primary" />}
                      {t.name}
                    </CardTitle>
                    <CardDescription>{t.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-3 font-mono">type: {t.type}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/templates/${t.slug}`}>
                        View template
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button asChild>
                <Link href="/templates">
                  Browse all templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          <section id="using-templates" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using templates</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive mode</h3>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm">
                    <code>create-vlang-app my-app --interactive</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Non-interactive mode</h3>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      create-vlang-app my-api --template web-server --addons v-docker github-setup --no-interactive
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">List all templates</h3>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm">
                    <code>create-vlang-app --list-templates</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id="template-structure" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Template structure</h2>
            <p>
              Every template lives under <code>templates/</code> in the cva-templates repository:
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
                {`templates/
└── web-server/
    ├── src/              # Application source
    ├── v.mod             # Module metadata and dependencies
    ├── cva.config.json   # Optional scaffold config
    ├── README.md
    └── AGENTS.md         # AI assistant contract`}
              </pre>
            </div>
          </section>

          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
            <Button variant="outline" asChild>
              <Link href="/docs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Documentation
              </Link>
            </Button>
            <Button asChild>
              <Link href="/docs/templates/customization">
                Template Customization
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
