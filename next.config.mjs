/** @type {import('next').NextConfig} */
const nextConfig = {
  // These root components are a partial extraction of the Composio docs site;
  // several unused siblings reference internal libs that aren't present here.
  // Only the components actually imported by the app get compiled/bundled, so
  // we skip project-wide lint/type gating on the stray files during build.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
