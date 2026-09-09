# Primdy Starter (TypeScript)

TypeScript starter kit for [Primdy](https://www.npmjs.com/package/primdy), a blazingly fast, file-system routed API framework for [Bun](https://bun.sh).

## Getting started

```bash
bun install
bun run dev
```

Your API is now running at `http://localhost:3000`.

## What's inside

```
src/
├── route.ts
├── middleware.ts
└── users/
    ├── route.ts
    ├── proxy.ts
    └── [id]/
        └── route.ts
```

Try it out:

```bash
curl http://localhost:3000/
curl http://localhost:3000/users -H "authorization: token"
curl http://localhost:3000/users/1 -H "authorization: token"
```

## License

MIT
