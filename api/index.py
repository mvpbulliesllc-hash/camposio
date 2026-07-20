"""Vercel Python serverless function.

This repository holds the Composio SDK source (a library, not a web app), so
there was no HTTP endpoint for Vercel to serve — which is why deploys failed
with a "missing Python endpoint" error. This handler gives Vercel a valid
entry point so the deployment succeeds and returns a small status page.
"""

from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.end_headers()
        self.wfile.write(b"Composio SDK repository - deployment OK.\n")
