'use client';

import { useEffect, useState } from 'react';

const STACKS = [
  {
    label: 'Web server',
    lines: [
      { prefix: '$', text: ' create-vlang-app my-api', color: 'text-foreground' },
      { prefix: '✔', text: ' Template   web-server', color: 'text-green-400' },
      { prefix: '✔', text: ' Extensions github-setup · v-docker', color: 'text-green-400' },
      { prefix: '✔', text: ' Running v install...', color: 'text-muted-foreground' },
      { prefix: '✔', text: ' Ready. cd my-api && v run .', color: 'text-primary' },
    ],
  },
  {
    label: 'CLI tool',
    lines: [
      { prefix: '$', text: ' create-vlang-app my-cli', color: 'text-foreground' },
      { prefix: '✔', text: ' Template   cli-app', color: 'text-green-400' },
      { prefix: '✔', text: ' Extensions github-setup · v-fmt-vet', color: 'text-green-400' },
      { prefix: '✔', text: ' Running v install...', color: 'text-muted-foreground' },
      { prefix: '✔', text: ' Ready. cd my-cli && v run . --help', color: 'text-primary' },
    ],
  },
  {
    label: 'Library module',
    lines: [
      { prefix: '$', text: ' create-vlang-app my-lib', color: 'text-foreground' },
      { prefix: '✔', text: ' Template   library-starter', color: 'text-green-400' },
      { prefix: '✔', text: ' Extensions github-setup', color: 'text-green-400' },
      { prefix: '✔', text: ' Running v install...', color: 'text-muted-foreground' },
      { prefix: '✔', text: ' Ready. cd my-lib && v test', color: 'text-primary' },
    ],
  },
];

export function AnimatedTerminal() {
  const [stackIdx, setStackIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const stack = STACKS[stackIdx];
    setVisibleLines(0);

    const lineTimers: ReturnType<typeof setTimeout>[] = [];
    stack.lines.forEach((_, i) => {
      lineTimers.push(setTimeout(() => setVisibleLines(i + 1), i * 420 + 200));
    });

    const cycleTimer = setTimeout(
      () => {
        setStackIdx((prev) => (prev + 1) % STACKS.length);
      },
      stack.lines.length * 420 + 2800,
    );

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(cycleTimer);
    };
  }, [stackIdx]);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  const stack = STACKS[stackIdx];

  return (
    <div className="relative w-full max-w-lg rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden elevation-md font-mono text-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50 bg-muted/40">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-muted-foreground">{stack.label}</span>
        <div className="ml-auto flex gap-1">
          {STACKS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${i === stackIdx ? 'bg-primary' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
      <div className="px-4 py-4 min-h-[140px] space-y-1.5">
        {stack.lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={`${stackIdx}-${i}`}
            className="flex items-start gap-2 animate-in fade-in-0 slide-in-from-bottom-1 duration-200"
          >
            <span className={`shrink-0 font-bold ${i === 0 ? 'text-muted-foreground' : line.color}`}>
              {line.prefix}
            </span>
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
        {visibleLines < stack.lines.length && (
          <span
            className={`inline-block w-2 h-4 bg-primary ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          />
        )}
      </div>
    </div>
  );
}
