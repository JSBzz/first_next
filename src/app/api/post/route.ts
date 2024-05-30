import { limit } from "@firebase/firestore";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface RequestBody {
  contents: string;
  title: string;
  userId: number;
}

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url);
  const limit = Number(searchParams.get("limit"));
  const lastId = Number(searchParams.get("lastId"));
  const response = await prisma.$transaction([
    prisma.post.count(),
    prisma.post.findMany({
      include: { user: true },
      take: 4,
      skip: lastId ? 1 : 0,
      ...(lastId && { cursor: { id: lastId } }),
    }),
  ]);
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  console.log("body: ", body);
  const response = await prisma.post.create({
    data: {
      contents: body?.contents,
      title: body?.title,
      user_id: Number(body?.userId),
    },
  });
  return Response.json(response);
}
