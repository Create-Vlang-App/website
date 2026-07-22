'use client';

import { ArrowLeft, ArrowRight, FileCode, Layers, Package, Settings } from 'lucide-react';
import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TemplateCustomizationClientPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Template Customization</h1>
          <p className="text-lg text-muted-foreground">Learn how to customize templates to fit your specific needs</p>
        </div>

        <div className="space-y-8">
          <section id="customization-basics" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Customization Basics</h2>
            <p>
              Templates provided by create-vlang-app are designed to be customizable. This guide shows how to adapt
              generated V projects — from module layout and tooling to dependencies and environment settings.
            </p>

            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  Project Structure Customization
                </h3>
                <p>After scaffolding, reorganize modules to match your domain. Common patterns across CVA templates:</p>

                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Top-level feature modules</h4>
                    <p className="text-sm text-muted-foreground">
                      Prefer top-level V modules (<code>health/</code>, <code>greet/</code>) — nested{' '}
                      <code>src/features/</code> paths do not import cleanly in V.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">v.mod at the root</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep module name, version, and dependencies in <code>v.mod</code>; run <code>v install</code>{' '}
                      after edits.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">docs/</h4>
                    <p className="text-sm text-muted-foreground">
                      Every starter ships a <code>docs/</code> tree — extend AUTHORING / PROJECT_STRUCTURE instead of
                      duplicating rules in README.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Tests beside modules</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep <code>*_test.v</code> next to the code under test and run <code>v test .</code>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Configuration Customization
                </h3>
                <p>Templates ship with v.mod, Makefile targets, and fmt/vet defaults you can tune:</p>

                <Tabs defaultValue="vmod" className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="vmod">v.mod</TabsTrigger>
                    <TabsTrigger value="fmt">v fmt / vet</TabsTrigger>
                    <TabsTrigger value="test">v test</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vmod" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`Module {
  name: 'my_app'
  description: 'My V application'
  version: '0.1.0'
  license: 'MIT'
  dependencies: []
}`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add VPM dependencies here, then run <code>v install</code>. Growth starters already declare real{' '}
                      <code>vsl</code> / <code>vtl</code> / <code>rxv</code> deps.
                    </p>
                  </TabsContent>
                  <TabsContent value="fmt" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`# Format and static checks
v fmt -w .
v vet .

# Optional: apply the v-fmt-vet extension for pre-commit hooks
create-vlang-app my-app --template cli-app --addons v-fmt-vet`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Prefer Makefile targets shipped by the template over ad-hoc scripts.
                    </p>
                  </TabsContent>
                  <TabsContent value="test" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`# Run the full suite from the project root
v test .

# Or a single module
v test ./health`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Web and CLI starters include smoke tests for health/greet paths — extend those instead of
                      replacing the harness.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Dependency Customization
                </h3>
                <p>Manage dependencies with VPM after scaffolding:</p>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# Edit v.mod dependencies, then:
v install

# Install a specific module into ~/.vmodules
v install vsl

# Refresh after lock/path changes
v install`}
                  </pre>
                </div>

                <p className="mt-4">
                  For Docker, Postgres, or CI wiring, prefer scaffolding with the matching extension rather than
                  hand-copying fragments.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Adding Extensions After Project Creation
                </h3>
                <p>
                  If you want extensions on an existing project, you can manually port the files from{' '}
                  <a
                    href="https://github.com/Create-Vlang-App/cva-templates/tree/main/extensions"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    cva-templates/extensions
                  </a>{' '}
                  or re-scaffold with the desired combination:
                </p>

                <ol className="list-decimal pl-6 space-y-4 mt-4">
                  <li>
                    <strong>Manual integration:</strong> Copy the extension&apos;s <code>template/</code> overlay onto
                    your project and reconcile conflicts.
                  </li>
                  <li>
                    <strong>Re-scaffold:</strong> Create a fresh project with the same template plus extensions, then
                    migrate your application modules.
                  </li>
                  <li>
                    <strong>Git branch:</strong> Apply extension changes on a branch and merge after review.
                  </li>
                </ol>

                <Alert className="mt-4">
                  <AlertTitle>Note</AlertTitle>
                  <AlertDescription>
                    The CLI applies extensions at scaffold time only. Post-create extension application may be added in
                    future releases.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          <section id="template-specific-customization" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Template-Specific Customization</h2>
            <p>Different CVA templates have distinct extension points:</p>

            <Tabs defaultValue="web" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="web">Web Server</TabsTrigger>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
              </TabsList>
              <TabsContent value="web" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Web Server (vweb/veb)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Routes:</strong> Extend the HTTP handlers in the template entrypoint; keep feature modules
                      at the top level.
                    </li>
                    <li>
                      <strong>Data stores:</strong> Pair with <code>v-sqlite</code> or <code>v-postgres</code> during
                      scaffold.
                    </li>
                    <li>
                      <strong>Deploy:</strong> Add <code>v-docker</code> and <code>github-setup</code> for containers +
                      setup-v CI.
                    </li>
                  </ul>
                  <div className="rounded-md bg-muted p-4 mt-4">
                    <pre className="text-sm overflow-x-auto">
                      {`create-vlang-app my-api \\
  --template web-server \\
  --addons v-docker github-setup v-postgres`}
                    </pre>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cli" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">CLI App</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Flags:</strong> Extend the generated flag/cli parsing; keep subcommands in dedicated
                      modules.
                    </li>
                    <li>
                      <strong>Quality:</strong> Add <code>v-fmt-vet</code> for pre-commit hooks.
                    </li>
                    <li>
                      <strong>DX:</strong> Pair with <code>development-container</code> for a portable V toolchain.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="library" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Library Starter</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Public API:</strong> Keep the publishable surface small; document examples under{' '}
                      <code>examples/</code> when present.
                    </li>
                    <li>
                      <strong>Tests:</strong> Ship <code>v test</code> coverage for every public function.
                    </li>
                    <li>
                      <strong>CI:</strong> Use <code>github-setup</code> so consumers see fmt/vet/test on every PR.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="growth" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">vsl / vtl / rxv starters</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>vsl-starter:</strong> Scientific Computing Starter with a real <code>vsl</code>{' '}
                      dependency.
                    </li>
                    <li>
                      <strong>vtl-starter:</strong> ML / Tensor Starter on <code>vtl</code>; compose{' '}
                      <code>vtl-vsl-bridge</code> for plots/GPU.
                    </li>
                    <li>
                      <strong>rxv-starter:</strong> Reactive App Starter using <code>ulises-jeremias/rxv</code>; deepen
                      with <code>rxv-operators</code>.
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section id="advanced-customization" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Customization</h2>
            <p>For deeper changes, adjust runtime configuration and deployment artifacts:</p>

            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Environment Variables</h3>
                <p>
                  Use <code>.env</code> locally when an extension provides samples (never commit secrets):
                </p>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# .env.example (from v-postgres / v-sqlite overlays)
DATABASE_URL=postgres://user:pass@localhost:5432/app
PORT=8080`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Docker & Compose</h3>
                <p>
                  When you scaffold with <code>v-docker</code>, customize <code>Dockerfile</code>, compose files, and
                  health checks for your deployment target. Rebuild with <code>docker compose up --build</code> after
                  changes.
                </p>
              </div>
            </div>
          </section>

          <div className="flex justify-center mt-8">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" asChild>
                <Link href="/docs/contributing">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Contributing
                </Link>
              </Button>
              <Button asChild>
                <Link href="/docs/advanced/usage">
                  Advanced Usage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
