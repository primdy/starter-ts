import { json } from "primdy";

export async function GET() {
  return json({ message: "Hello from Primdy!" }); // or return Response.json({ ... })
}
