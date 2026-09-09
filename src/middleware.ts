export function middleware(request: Request) {
  const { method, url } = request;
  console.log(`${method} ${new URL(url).pathname}`);
}
