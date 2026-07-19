export const revalidate = false;

/**
 * Static llms.txt index.
 *
 * The original route walked the fumadocs page tree (`@/lib/source`), which
 * isn't part of this standup. Until the full docs source is wired in, serve a
 * static pointer to the canonical documentation index.
 */
export function GET() {
  const index = `# Composio Documentation

> Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.

> **For AI agents:** Give your agent tools it can call directly with \`composio.create(user_id)\` + \`session.tools()\` and a provider package (e.g. \`composio_openai\`, \`@composio/openai\`). To connect over MCP instead, create the session with \`mcp: true\` and read \`session.mcp.url\` from any MCP-compatible client.

## Start here

- https://docs.composio.dev/docs/quickstart
- https://docs.composio.dev/docs/how-composio-works
- https://docs.composio.dev/docs/configuring-sessions

## Reference

- https://docs.composio.dev/reference
- https://docs.composio.dev/docs/cli

## Full Documentation

- https://docs.composio.dev/llms-full.txt
`;

  return new Response(index, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
