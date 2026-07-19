import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Composio — build agents that take action',
  description:
    'Give your AI agents 1000+ pre-authenticated toolkits, per-user sessions, authentication, triggers, and a sandbox.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
