#!/usr/bin/env python3
"""Run the Copper Frequency site locally: python app.py"""
import functools, http.server, os, webbrowser

PORT = 8765
root = os.path.dirname(os.path.abspath(__file__))
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=root)

if __name__ == "__main__":
    with http.server.ThreadingHTTPServer(("localhost", PORT), handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"Copper Frequency running at {url}  (Ctrl+C to stop)")
        webbrowser.open(url)
        httpd.serve_forever()
