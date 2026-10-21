#!/usr/bin/env python3
"""
Copper Frequency Jacket Studio
Run this file to open the application.
"""

import os
import sys
import webbrowser
from http.server import SimpleHTTPRequestHandler, HTTPServer
import threading

# Simple local server that serves a self-contained interface
HTML = """<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Copper Frequency</title>
<style>
body { margin:0; font-family:system-ui,sans-serif; background:#0c0c0c; color:#f0f0f0; }
header { text-align:center; padding:2.5rem; border-bottom:1px solid #c9a227; }
h1 { color:#c9a227; margin:0; letter-spacing:.08em; }
nav { display:flex; flex-wrap:wrap; justify-content:center; gap:.5rem; padding:1rem; background:#111; position:sticky; top:0; }
button { padding:.9rem 1.4rem; background:transparent; color:#fff; border:1px solid #333; border-radius:8px; }
button.active { background:#c9a227; color:#000; }
section { display:none; max-width:900px; margin:0 auto; padding:2rem 1rem; }
section.show { display:block; }
.card { background:#161616; border:1px solid #222; border-radius:14px; padding:1.4rem; margin-bottom:1rem; }
h2,h3 { color:#c9a227; }
</style></head><body>
<header><h1>COPPER FREQUENCY</h1><p style="color:#888">Frequency · Culture · Resonance</p></header>
<nav>
<button class="active" onclick="show('men')">Men’s Line</button>
<button onclick="show('women')">Women’s Line</button>
<button onclick="show('manufacture')">Manufacturing</button>
<button onclick="show('funding')">Kickstarter</button>
</nav>
<section id="men" class="show">
<div class="card"><h3>Randy Racer</h3><p>White F1 racing jacket with bold red sleeve stripes, copper circuit wiring, and black transducers.</p></div>
<div class="card"><h3>Líptė Rähł</h3><p>Black base racing jacket with red stripes and full copper frequency system.</p></div>
<div class="card"><h3>Trombone</h3><p>Copper frequency version of the Acne Studios Oliver motorcycle jacket.</p></div>
<div class="card"><h3>Bomber</h3><p>Classic MA-1 silhouette with copper conductive shell and distributed transducer array.</p></div>
<div class="card"><h3>London Calling</h3><p>Oversized punk energy with exposed copper circuitry.</p></div>
<div class="card"><h3>Mountain Monk</h3><p>Technical hooded outdoor jacket with spine-aligned transducers.</p></div>
<div class="card"><h3>T3P0</h3><p>Dark tactical fusion of Terminator, Star Wars, and Platoon with copper endoskeleton accents.</p></div>
</section>
<section id="women">
<div class="card"><h3>Luna</h3><p>Women’s Randy Racer. Tailored white F1 with red sleeve stripes and refined copper nodes.</p></div>
<div class="card"><h3>Vesper</h3><p>Women’s Bomber with waist definition and elegant copper detailing.</p></div>
<div class="card"><h3>Riot</h3><p>Women’s London Calling. Tailored punk copper.</p></div>
<div class="card"><h3>Aria</h3><p>Women’s Mountain Monk. Contoured hooded technical.</p></div>
<div class="card"><h3>Nyx</h3><p>Women’s T3P0. Sculpted dark tactical fusion.</p></div>
</section>
<section id="manufacture"><div class="card"><h2>Manufacturing</h2><p>Shared copper conductive platform. Materials from YL Shielding, 3L Tex, or Alibaba. Assembly via WESMART, R&B Smart Clothing, or Shenzhen EMS. External frequency-meter plug-in on every jacket.</p></div></section>
<section id="funding"><div class="card"><h2>Kickstarter</h2><p>Full collection launch. Early-bird rewards for any style including Luna and Líptė Rähł. Stretch goals for limited editions.</p></div></section>
<script>
function show(id){document.querySelectorAll('section').forEach(s=>s.className='');document.getElementById(id).className='show';document.querySelectorAll('button').forEach(b=>b.className='');event.target.className='active';}
</script>
</body></html>"""

def run_server():
    class Handler(SimpleHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(HTML.encode())

    port = 8765
    server = HTTPServer(("localhost", port), Handler)
    print(f"Copper Frequency app running at http://localhost:{port}")
    print("Opening in your browser...")
    webbrowser.open(f"http://localhost:{port}")
    server.serve_forever()

if __name__ == "__main__":
    print("Starting Copper Frequency Jacket Studio...")
    run_server()
