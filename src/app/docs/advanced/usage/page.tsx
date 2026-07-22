import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { DiagramWorkflow } from '@/components/diagram-workflow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'Advanced Usage | Create Vlang App Documentation',
  description: 'Advanced usage guide for create-vlang-app — flags, cache, and environment variables.',
};

export default function AdvancedUsagePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Advanced Usage</h1>
          <p className="text-lg text-muted-foreground">
            Flags, catalog cache, and environment variables for create-vlang-app
          </p>
        </div>

        <div className="space-y-8">
          <section id="v-workflow" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Working with V in Generated Projects</h2>
            <p>
              Every CVA template is V-native: dependencies live in <code>v.mod</code>, formatting uses{' '}
              <code>v fmt</code>, static checks use <code>v vet</code>, and tests run with <code>v test</code>.
            </p>

            <Tabs defaultValue="install" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="install">v install</TabsTrigger>
                <TabsTrigger value="run">v run</TabsTrigger>
                <TabsTrigger value="quality">fmt / vet / test</TabsTrigger>
              </TabsList>
              <TabsContent value="install" className="mt-2">
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# Scaffold (v install runs unless --no-install)
create-vlang-app my-app --template web-server

# Refresh module deps later
cd my-app
v install`}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="run" className="mt-2">
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# Run the web server (template-dependent entrypoint)
cd my-app
v run .

# Run with arguments
v run . -- --port 8080`}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="quality" className="mt-2">
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    {`v fmt .
v vet .
v test .`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>

            <Alert className="mt-4">
              <AlertTitle>Skip automatic install</AlertTitle>
              <AlertDescription>
                Use <code>--no-install</code> when scaffolding if you want to review <code>v.mod</code> before running{' '}
                <code>v install</code> yourself.
              </AlertDescription>
            </Alert>
          </section>

          <section id="cli-flags" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">CLI flags</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Flag</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['-v, --verbose', 'Print additional logs'],
                    ['-i, --info', 'Print environment debug info'],
                    ['--no-install', 'Skip v install after scaffolding'],
                    ['-t, --template <slug>', 'Template from cva-templates'],
                    ['--addons / --extend', 'Extensions to merge into the project'],
                    ['-f, --force', 'Overwrite non-empty target directory'],
                    ['--interactive / --no-interactive', 'Prompt for options or run headless'],
                    ['--list-templates / --list-addons', 'Print catalog entries'],
                    ['--set key=value', 'Override template variables'],
                    ['--keep-on-failure', 'Preserve partial output on error'],
                    ['--strict-version', 'Require exact CLI/catalog versions (see CVA_STRICT_VERSION)'],
                    ['--offline', 'Do not reach network for catalog refresh'],
                    ['--no-cache', 'Bypass ~/.cache/cva (see CVA_NO_CATALOG_CACHE)'],
                    ['--cache-dir', 'Override catalog cache location'],
                    ['--pin <ref>', 'Pin cva-templates git ref'],
                    ['--refresh always|stale|manual', 'Catalog refresh policy (CVA_REFRESH)'],
                  ].map(([flag, desc]) => (
                    <tr key={flag} className="border-b">
                      <td className="py-2 px-4">
                        <code>{flag}</code>
                      </td>
                      <td className="py-2 px-4">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="cache" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Catalog cache</h2>
            <p>
              The CLI caches <code>Create-Vlang-App/cva-templates</code> under <code>~/.cache/cva</code> by default.
              Manage it with subcommands:
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-x-auto">{`create-vlang-app cache dir
create-vlang-app cache list
create-vlang-app cache clean
create-vlang-app cache verify
create-vlang-app cache outdated
create-vlang-app cache update
create-vlang-app cache doctor`}</pre>
            </div>
          </section>

          <section id="env" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Environment variables</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <code>CVA_CACHE_DIR</code> — catalog cache path (default <code>~/.cache/cva</code>)
              </li>
              <li>
                <code>CVA_STRICT_VERSION</code> — fail when CLI and catalog versions mismatch
              </li>
              <li>
                <code>CVA_NO_CATALOG_CACHE</code> — disable catalog caching
              </li>
              <li>
                <code>CVA_REFRESH</code> — <code>always</code>, <code>stale</code>, or <code>manual</code>
              </li>
              <li>
                <code>CVA_SKIP_GIT</code> — skip <code>git init</code> after scaffolding
              </li>
            </ul>
          </section>

          <section id="ci-cd" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">CI/CD Integration</h2>
            <p>
              Use the <code>github-setup</code> extension for workflows powered by{' '}
              <a href="https://github.com/vlang/setup-v" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                vlang/setup-v
              </a>
              :
            </p>
            <pre className="text-xs bg-muted p-2 rounded-md overflow-x-auto">
              create-vlang-app my-app --template web-server --addons github-setup --no-interactive
            </pre>

            <DiagramWorkflow
              className="mt-4"
              title="Deployment Workflow"
              chart={`
graph TD
    A["Developer Pushes Code"] --> B["CI Pipeline Triggered"]
    B --> C["setup-v installs V"]
    C --> D["v fmt -verify / v vet"]
    C --> E["v test"]
    D --> F["Build Binary"]
    E --> F
    F --> G["Deploy Artifact"]
`}
            />
          </section>

          <section id="troubleshooting" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-500" />
                Catalog or module issues
              </h3>
              <ul className="list-disc pl-6 space-y-2 mt-2 text-sm">
                <li>
                  Run <code>create-vlang-app cache doctor</code> to validate cache integrity
                </li>
                <li>
                  Set <code>CVA_REFRESH=always</code> to force-refresh cva-templates
                </li>
                <li>
                  Ensure <code>~/.vmodules</code> is writable when running <code>v install</code>
                </li>
              </ul>
            </div>
          </section>

          <Button variant="outline" asChild className="mt-8">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
