# next-turbo-react-dsfr

Example repo to reproduce a bug where Turbopack doesn't correctly transpile React DSFR's components in Next 15.

## Run

```bash
# Header is rendered correctly
npm run dev

# Header brand top is not displayed and not transpiled when using Turbopack
npm run dev:turbo
```
