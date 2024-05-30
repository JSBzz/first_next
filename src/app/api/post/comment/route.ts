import { limit } from "@firebase/firestore";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface RequestBody {
  writerId: number;
  contents: string;
  postId: number;
}

export async function GET(request: Request) {
  const url = new URL(request.url, process.env.NEXT_PUBLIC_BASE_URL);
  const searchParams = new URLSearchParams(url.search);
  const postId = Number(searchParams.get("postId"));
  const response = await prisma.post_comment.findMany({
    where: { post_id: postId },
    include: { user: true },
  });
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const response = await prisma.post_comment.create({
    data: {
      contents: body.contents,
      writer_id: Number(body.writerId),
      post_id: Number(body.postId),
    },
  });
  return NextResponse.json(response, { status: 201 });
}
