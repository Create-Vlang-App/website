import { BookOpen, Container, Gauge, Github, Layers, Package, Server, Shield, Terminal, Workflow } from 'lucide-react';
import Link from 'next/link';
import { AnimatedGradient } from '@/components/animated-gradient';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Server, label: 'vweb / veb HTTP server' },
  { icon: Terminal, label: 'CLI with flag parsing' },
  { icon: Package, label: 'v.mod + VPM modules' },
  { icon: Gauge, label: 'v fmt / v vet / v test' },
  { icon: Github, label: 'setup-v GitHub Actions' },
  { icon: Container, label: 'Docker + Compose overlays' },
  { icon: Shield, label: 'Pre-commit fmt/vet hooks' },
  { icon: Layers, label: 'Composable cva-templates' },
  { icon: Workflow, label: 'Cache at ~/.cache/cva' },
  { icon: BookOpen, label: 'vsl / vtl / rxv roadmap' },
];

export function SaasAiBanner() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950/80 to-cyan-950/80">
      <div className="absolute inset-0 z-0 opacity-40">
        <AnimatedGradient />
      </div>
      <div className="node-graph-bg absolute inset-0 z-0 opacity-20" />
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_80%)] z-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-200 backdrop-blur-sm">
              <span>⚡</span>
              <span>NEW · Flagship</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-cyan-300 leading-tight">
                Web Server Starter
              </h2>
              <p className="text-lg text-slate-300 max-w-lg">
                Production-oriented vweb/veb scaffold with VPM deps, CI via setup-v, and composable extensions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-3 w-3 text-violet-400 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-cyan-600 hover:from-violet-400 hover:to-cyan-500 text-white shadow-lg shadow-violet-900/40 transition-all duration-300"
                asChild
              >
                <Link href="/templates/web-server">Get Started →</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-400/30 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-violet-400/50 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Create-Vlang-App/cva-templates" target="_blank" rel="noopener noreferrer">
                  View cva-templates →
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-xl border border-violet-400/20 bg-slate-900/80 shadow-2xl shadow-violet-900/30 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800/60 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono">terminal</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <p className="text-green-400">$ create-vlang-app my-api \</p>
                <p className="text-slate-300 pl-4">--template web-server \</p>
                <p className="text-slate-300 pl-4">--addons v-docker github-setup</p>
                <p className="mt-4 text-slate-500"># ✅ vweb server scaffold ready</p>
                <p className="text-slate-500"># ✅ v fmt/vet hooks configured</p>
                <p className="text-slate-500"># ✅ setup-v CI workflow included</p>
                <p className="mt-4 animate-pulse text-violet-400">▊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
