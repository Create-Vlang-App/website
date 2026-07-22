import { ArrowLeft, ArrowRight, CheckCircle, Container, Package, Terminal } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { CopyButton } from '@/components/copy-button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Installation | Create Vlang App Documentation',
  description:
    'Install create-vlang-app via VPM (v install), GitHub Releases, Homebrew, AUR, or Docker. Get up and running in seconds.',
  alternates: { canonical: '/docs/installation' },
  openGraph: {
    title: 'Installation | Create Vlang App Documentation',
    description:
      'Install create-vlang-app via VPM (v install), GitHub Releases, Homebrew, AUR, or Docker. Get up and running in seconds.',
    url: '/docs/installation',
    type: 'article',
  },
};

const methods = [
  {
    id: 'vpm',
    label: 'VPM / v install',
    icon: <Package className="h-4 w-4" />,
    recommended: true,
  },
  {
    id: 'release',
    label: 'GitHub Release',
    icon: <Terminal className="h-4 w-4" />,
    recommended: false,
  },
  {
    id: 'homebrew',
    label: 'Homebrew',
    icon: <Terminal className="h-4 w-4" />,
    recommended: false,
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: <Container className="h-4 w-4" />,
    recommended: false,
  },
];

export default function InstallationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Installation</h1>
          <p className="text-lg text-muted-foreground">
            Get <code>create-vlang-app</code> running in seconds. Choose the install method that fits your workflow.
          </p>
        </div>

        <Alert className="border-primary/30 bg-primary/5">
          <CheckCircle className="h-4 w-4 text-primary" />
          <AlertTitle>VPM-first distribution</AlertTitle>
          <AlertDescription>
            Install the CLI with <code>v install create-vlang-app</code>, then scaffold with{' '}
            <code>create-vlang-app my-app</code>. Generated projects use <code>v.mod</code>,{' '}
            <code>v fmt</code>, <code>v vet</code>, and <code>v test</code>.
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Install methods</h2>

          <Tabs defaultValue="vpm">
            <TabsList className="flex h-auto flex-wrap gap-1">
              {methods.map((m) => (
                <TabsTrigger key={m.id} value={m.id} className="flex items-center gap-1.5">
                  {m.icon}
                  {m.label}
                  {m.recommended && (
                    <Badge variant="secondary" className="ml-1 text-[10px] px-1 py-0">
                      recommended
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="vpm" className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    VPM / v install
                  </CardTitle>
                  <CardDescription>
                    Works on macOS, Linux, and Windows. Requires the{' '}
                    <a href="https://vlang.io" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                      V compiler
                    </a>
                    .
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <p className="text-sm font-medium mb-2">Install the CLI module:</p>
                    <CopyButton
                      command="v install create-vlang-app"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Scaffold a project:</p>
                    <CopyButton
                      command="create-vlang-app my-app --template web-server"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Non-interactive with extensions:</p>
                    <CopyButton
                      command="create-vlang-app my-api --template web-server --addons v-docker github-setup --no-interactive"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">V compiler 0.5+</p>
                      <p className="text-xs text-muted-foreground">
                        Install from{' '}
                        <a href="https://vlang.io" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                          vlang.io
                        </a>{' '}
                        or use{' '}
                        <a
                          href="https://github.com/vlang/setup-v"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          vlang/setup-v
                        </a>{' '}
                        in CI. Check with <code>v version</code>.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">git</p>
                      <p className="text-xs text-muted-foreground">
                        Used to initialize the project repository after scaffolding (unless <code>CVA_SKIP_GIT</code> is
                        set).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Catalog cache</p>
                      <p className="text-xs text-muted-foreground">
                        Templates are cached under <code>~/.cache/cva</code> by default (override with{' '}
                        <code>CVA_CACHE_DIR</code>).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="release" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    GitHub Releases
                  </CardTitle>
                  <CardDescription>Prebuilt binaries for platforms where VPM is not yet available.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Download the latest release from{' '}
                    <a
                      href="https://github.com/Create-Vlang-App/create-vlang-app/releases"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create-Vlang-App/create-vlang-app
                    </a>
                    , add the binary to your <code>PATH</code>, then run <code>create-vlang-app --version</code>.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="homebrew" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Homebrew
                  </CardTitle>
                  <CardDescription>Planned — follow release notes for tap availability.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CopyButton
                    command="brew install create-vlang-app"
                    className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                  />
                  <Alert>
                    <AlertDescription>
                      Homebrew packaging is tracked in the CLI repo. Until the tap ships, prefer{' '}
                      <code>v install create-vlang-app</code>.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docker" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Container className="h-5 w-5 text-primary" />
                    Docker
                  </CardTitle>
                  <CardDescription>Run without a local V install. Useful in CI/CD pipelines.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Scaffold into the current directory:</p>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm font-mono overflow-x-auto">{`docker run --rm -it \\
  -v "\${PWD}:/app" -w /app \\
  create-vlang-app/cli:latest \\
  my-app --template web-server --no-interactive`}</pre>
                    </div>
                  </div>
                  <Alert>
                    <AlertDescription>
                      Docker images are optional in early releases. Mount your working directory with{' '}
                      <code>-v {'"${PWD}:/app"'}</code> and set <code>-w /app</code>.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Verify the installation</h2>
          <CopyButton
            command="create-vlang-app --version"
            className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
          />
          <CopyButton
            command="create-vlang-app --list-templates"
            className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Templates catalog (cva-templates)</h2>
          <p>
            Starters and extensions live in{' '}
            <a
              href="https://github.com/Create-Vlang-App/cva-templates"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Create-Vlang-App/cva-templates
            </a>
            . The CLI clones or refreshes this catalog into <code>~/.cache/cva</code> unless{' '}
            <code>--no-cache</code> or <code>CVA_NO_CATALOG_CACHE</code> is set.
          </p>
        </section>

        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
          <a
            href="https://github.com/Create-Vlang-App/create-vlang-app/releases"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View release notes →
          </a>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row mt-2">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Docs
          </Link>
          <Link
            href="/docs/advanced/usage"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            CLI flags & cache
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
