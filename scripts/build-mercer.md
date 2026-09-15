# Rebuilding public/sites/mercer/assets/

Mercer's showcase page used to ship raw JSX + `cdn.tailwindcss.com` and compile
both live in the visitor's browser (via `@babel/standalone`) before React could
render a single frame — the actual root cause of it reading as slow/frame-by-frame,
independent of network speed. `assets/app.js` and `assets/tailwind.css` are the
same output, produced once at build time instead of on every page load.

To regenerate after editing the JSX inside the (now inert, kept for reference
only) `<!-- ... -->` comment block at the bottom of `index.html`:

```bash
npm install --no-save @babel/core @babel/preset-react tailwindcss @tailwindcss/cli

# 1. Extract the JSX and transpile it exactly as Babel Standalone did
#    (classic runtime, same pragma), just ahead of time instead of live.
node -e "
const babel = require('@babel/core');
const fs = require('fs');
const src = fs.readFileSync('mercer.jsx', 'utf8'); // paste the JSX out first
const out = babel.transformSync(src, {
  presets: [['@babel/preset-react', { runtime: 'classic', pragma: 'React.createElement', pragmaFrag: 'React.Fragment' }]],
});
fs.writeFileSync('assets/app.js', out.code);
"

# 2. Rebuild the Tailwind stylesheet. The @theme block below matches the
#    tailwind.config the CDN script used to read (Geist/Newsreader fonts).
cat > input.css <<'EOF'
@import "tailwindcss";
@source "./assets/app.js";
@source "./index.html";
@theme {
  --font-sans: Geist, "Inter Tight", sans-serif;
  --font-serif: Newsreader, serif;
}
EOF
npx tailwindcss -i input.css -o assets/tailwind.css --minify
```

Measured result: removes the `cdn.tailwindcss.com` runtime JIT engine and the
`@babel/standalone` in-browser compiler entirely — both were loaded and
executed before first paint on every visit. Same visual output; the compile
step just happens once here instead of on every visitor's device.
