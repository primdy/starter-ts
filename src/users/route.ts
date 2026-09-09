type User = { id: string; name: string };

const users: User[] = [
  { id: "1", name: "Ada Lovelace" },
  { id: "2", name: "Grace Hopper" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<User>;
  const user: User = {
    id: String(users.length + 1),
    name: body.name ?? "Anonymous",
  };
  users.push(user);
  return Response.json(user, { status: 201 });
}
