import { Blocks, KeyRound, Radio, TerminalSquare } from 'lucide-react';

import { DocsHeroV2 } from '@/docs-hero-v2';
import { AIToolsBanner } from '@/ai-tools-banner';
import { AuthConfigFlow } from '@/auth-config-flow';
import { ConnectionRefreshVisual } from '@/connection-refresh-visual';
import { ClaudeMockUI } from '@/claude-mock-ui';
import { CapabilityCard, CapabilityList } from '@/capability-card';
import { Callout } from '@/callout';
import { ExamplesGallery, type GalleryItem } from '@/examples-gallery';
import { ExperimentalBadge } from '@/experimental-badge';
import { Glossary, GlossaryTerm } from '@/glossary';
import { CopyButton } from '@/copy-button';
import { EditOnGitHub } from '@/edit-on-github';
import { Feedback } from '@/feedback';

const EXAMPLES: GalleryItem[] = [
  {
    title: 'Gmail triage assistant',
    description:
      'Summarize, label, and draft replies across an inbox using a per-user Composio session.',
    href: '/docs/examples/gmail-triage',
    categories: ['General agents'],
    logos: ['gmail'],
    featured: true,
    order: 1,
  },
  {
    title: 'Slack standup bot',
    description:
      'A background agent that collects updates and posts a daily digest to a channel.',
    href: '/docs/examples/slack-standup',
    categories: ['Background agents'],
    logos: ['slack'],
    featured: true,
    order: 2,
  },
  {
    title: 'GitHub PR reviewer',
    description:
      'A coding agent that reads diffs, runs checks, and leaves review comments on pull requests.',
    href: '/docs/examples/github-reviewer',
    categories: ['Coding agents'],
    logos: ['github'],
    featured: true,
    order: 3,
  },
  {
    title: 'Linear issue router',
    description:
      'Classify inbound issues and route them to the right team automatically.',
    href: '/docs/examples/linear-router',
    categories: ['Background agents'],
    logos: ['linear'],
    order: 4,
  },
  {
    title: 'Notion knowledge agent',
    description: 'Answer questions grounded in a Notion workspace with tool search.',
    href: '/docs/examples/notion-agent',
    categories: ['General agents'],
    logos: ['notion'],
    order: 5,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-fd-muted-foreground">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-fd-background text-fd-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-fd-border bg-fd-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid size-6 place-items-center rounded-md bg-[var(--composio-brand)] font-mono text-[13px] font-bold text-white">
              C
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Composio</span>
            <span className="ml-1 rounded-full border border-fd-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-fd-muted-foreground">
              docs
            </span>
          </div>
          <nav className="flex items-center gap-1.5 text-sm">
            <a
              className="rounded-md px-3 py-1.5 text-fd-muted-foreground no-underline transition-colors hover:bg-fd-accent hover:text-fd-foreground"
              href="https://docs.composio.dev"
            >
              Documentation
            </a>
            <a
              className="rounded-md bg-fd-foreground px-3 py-1.5 font-medium text-fd-background no-underline transition-opacity hover:opacity-90"
              href="https://dashboard.composio.dev"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <DocsHeroV2 />
      </section>

      {/* AI tools banner */}
      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <AIToolsBanner />
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionLabel>What you get</SectionLabel>
        <h2 className="mb-8 max-w-2xl text-3xl font-normal leading-[1.1] tracking-tight sm:text-4xl">
          One SDK, the whole action layer.
        </h2>
        <CapabilityList>
          <CapabilityCard
            icon={<Blocks className="size-6" />}
            title="1000+ toolkits"
            description="Pre-authenticated tools across the apps your users already live in — Gmail, Slack, GitHub, Notion, and more."
            href="/docs/toolkits"
          />
          <CapabilityCard
            icon={<KeyRound className="size-6" />}
            title="Managed auth"
            description="OAuth, API keys, and token refresh handled per user, so your agent always has a valid connection."
            href="/docs/authentication"
          />
          <CapabilityCard
            icon={<Radio className="size-6" />}
            title="Triggers"
            description="Wake your agent on real-world events — a new email, a PR, a calendar invite — without polling."
            href="/docs/triggers"
          />
          <CapabilityCard
            icon={<TerminalSquare className="size-6" />}
            title="Sandbox workbench"
            description="Run code and tools in an isolated sandbox scoped to each session."
            href="/docs/workbench"
          />
        </CapabilityList>
      </section>

      {/* Auth + connection visuals */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Authentication</SectionLabel>
            <h3 className="mb-6 text-2xl font-normal tracking-tight">
              Configure an auth config once.
            </h3>
            <AuthConfigFlow />
          </div>
          <div>
            <SectionLabel>Connections</SectionLabel>
            <h3 className="mb-6 text-2xl font-normal tracking-tight">
              Tokens refresh themselves.
            </h3>
            <ConnectionRefreshVisual />
          </div>
        </div>
      </section>

      {/* CLI / coding-agent surface */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-6 flex items-center gap-3">
          <SectionLabel>For coding agents</SectionLabel>
          <ExperimentalBadge />
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-normal leading-tight tracking-tight sm:text-3xl">
              A local tool surface for your terminal.
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-fd-muted-foreground">
              The <code className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[13px]">composio</code> CLI
              lets coding agents like Claude Code search, execute, and script
              tools straight from the shell.
            </p>
            <div className="flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-3 font-mono text-[13px]">
              <span className="text-fd-muted-foreground">$</span>
              <span className="flex-1">curl -fsSL https://composio.dev/install | bash</span>
              <CopyButton text="curl -fsSL https://composio.dev/install | bash" />
            </div>
            <Callout type="tip" title="Grab an API key first">
              Create a{' '}
              <code className="font-mono text-[13px]">COMPOSIO_API_KEY</code> from the
              dashboard, then run <code className="font-mono text-[13px]">composio login</code>.
            </Callout>
          </div>
          <ClaudeMockUI title="Claude Code">
            <div className="font-mono text-[13px] leading-relaxed">
              <p className="text-fd-muted-foreground"># summarize my unread email</p>
              <p className="mt-2">
                <span className="text-[var(--composio-brand)]">→</span> composio search
                &quot;gmail read messages&quot;
              </p>
              <p className="mt-1 text-fd-muted-foreground">
                found GMAIL_FETCH_EMAILS · GMAIL_FETCH_MESSAGE_BY_ID
              </p>
              <p className="mt-2">
                <span className="text-[var(--composio-brand)]">→</span> composio execute
                GMAIL_FETCH_EMAILS
              </p>
              <p className="mt-1 text-emerald-400">✓ 4 unread threads · drafting digest…</p>
            </div>
          </ClaudeMockUI>
        </div>
      </section>

      {/* Examples gallery */}
      <section className="mx-auto max-w-6xl border-t border-fd-border sm:px-2">
        <ExamplesGallery items={EXAMPLES} />
      </section>

      {/* Glossary */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionLabel>Concepts</SectionLabel>
        <h2 className="mb-8 text-3xl font-normal tracking-tight sm:text-4xl">
          The words we use.
        </h2>
        <Glossary>
          <GlossaryTerm name="Session">
            A per-user scope that holds connected accounts, auth configs, and the
            tools an agent is allowed to call. Create one with{' '}
            <code className="font-mono text-[13px]">composio.create(user_id)</code>.
          </GlossaryTerm>
          <GlossaryTerm name="Toolkit">
            A collection of tools for a single app (Gmail, Slack, GitHub) that share
            an authentication scheme.
          </GlossaryTerm>
          <GlossaryTerm name="Auth config">
            A reusable definition of how to authenticate against a toolkit — OAuth
            client, API-key scheme, or a custom flow.
          </GlossaryTerm>
          <GlossaryTerm name="Trigger">
            A subscription that wakes your agent when something happens in a
            connected app, delivered as an event.
          </GlossaryTerm>
        </Glossary>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Feedback page="/" />
            <EditOnGitHub path="app/page.tsx" />
          </div>
          <p className="mt-8 text-xs text-fd-muted-foreground">
            Stood up from the Composio docs component set · MIT licensed.
          </p>
        </div>
      </footer>
    </main>
  );
}
