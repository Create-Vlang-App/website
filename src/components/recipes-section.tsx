import { ArrowRight, Layers, Server, Sparkles, Workflow } from 'lucide-react';
import Link from 'next/link';
import type { ElementType } from 'react';
import { CopyButton } from '@/components/copy-button';
import { Button } from '@/components/ui/button';

interface Recipe {
  title: string;
  description: string;
  icon: ElementType;
  labels: string[];
  command: {
    base: string;
    templateFlag: string;
    templateValue: string;
    addonsFlag?: string;
    addonsValue?: string;
  };
  rawCommand: string;
  href: string;
}

const recipes: Recipe[] = [
  {
    title: 'Web server',
    description: 'vweb/veb HTTP starter with Docker and GitHub Actions via setup-v.',
    icon: Server,
    labels: ['vweb', 'Docker', 'GitHub Actions', 'VPM'],
    command: {
      base: 'create-vlang-app my-api ',
      templateFlag: '--template',
      templateValue: ' web-server ',
      addonsFlag: '--addons',
      addonsValue: ' v-docker github-setup',
    },
    rawCommand:
      'create-vlang-app my-api --template web-server --addons v-docker github-setup --no-interactive',
    href: '/templates/web-server',
  },
  {
    title: 'CLI tool',
    description: 'flag/cli starter with fmt/vet hooks and Dev Container extension.',
    icon: Layers,
    labels: ['CLI', 'flag', 'v fmt', 'Dev Container'],
    command: {
      base: 'create-vlang-app my-cli ',
      templateFlag: '--template',
      templateValue: ' cli-app ',
      addonsFlag: '--addons',
      addonsValue: ' development-container github-setup',
    },
    rawCommand:
      'create-vlang-app my-cli --template cli-app --addons development-container github-setup --no-interactive',
    href: '/templates/cli-app',
  },
  {
    title: 'Library module',
    description: 'Publishable v.mod library with docs, examples, and v test harness.',
    icon: Workflow,
    labels: ['Library', 'v.mod', 'v test', 'VPM'],
    command: {
      base: 'create-vlang-app my-lib ',
      templateFlag: '--template',
      templateValue: ' library-starter ',
      addonsFlag: '--addons',
      addonsValue: ' github-setup v-fmt-vet',
    },
    rawCommand:
      'create-vlang-app my-lib --template library-starter --addons github-setup v-fmt-vet --no-interactive',
    href: '/templates/library-starter',
  },
  {
    title: 'Systems app',
    description: 'Low-level V starter with optional Docker and CI overlays.',
    icon: Sparkles,
    labels: ['Systems', 'Performance', 'Docker', 'Native'],
    command: {
      base: 'create-vlang-app my-sys ',
      templateFlag: '--template',
      templateValue: ' systems-app ',
      addonsFlag: '--addons',
      addonsValue: ' v-docker github-setup',
    },
    rawCommand:
      'create-vlang-app my-sys --template systems-app --addons v-docker github-setup --no-interactive',
    href: '/templates/systems-app',
  },
];

export function RecipesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Popular recipes</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              Choose a path. Ship faster.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Curated template + extension combinations with copy-paste commands for the V toolchain.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl divide-y divide-border/40">
          {recipes.map((recipe, index) => {
            const Icon = recipe.icon;
            return (
              <div
                key={recipe.title}
                className={`flex flex-col md:flex-row md:items-center gap-6 py-8 px-4 rounded-lg ${index % 2 === 1 ? 'bg-muted/20' : 'bg-transparent'}`}
              >
                <div className="flex-1 space-y-3 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-violet-500/20 to-cyan-600/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-snug">{recipe.title}</h3>
                      <p className="text-sm text-muted-foreground">{recipe.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-1">
                    {recipe.labels.map((label) => (
                      <span
                        key={label}
                        className="inline-block rounded-full border border-border/60 bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-3 min-w-0">
                  <div className="rounded-lg bg-card/60 border border-border/50 p-3 font-mono text-xs overflow-x-auto">
                    <span className="text-muted-foreground">{recipe.command.base}</span>
                    <span className="text-primary font-medium">{recipe.command.templateFlag}</span>
                    <span className="text-foreground">{recipe.command.templateValue}</span>
                    {recipe.command.addonsFlag && (
                      <>
                        <span className="text-[hsl(var(--brand-teal))] font-medium">{recipe.command.addonsFlag}</span>
                        <span className="text-foreground">{recipe.command.addonsValue}</span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <CopyButton command={recipe.rawCommand} size="sm" className="w-full sm:w-auto" />
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                      <Link href={recipe.href}>
                        View template
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
