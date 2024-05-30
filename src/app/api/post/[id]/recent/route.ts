import { PrismaClient } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params: { id } }: Params) {
  try {
    let response: any = { previous: undefined, now: undefined, next: undefined };
    const previousPost = await prisma.post.findFirst({
      where: { id: { lt: Number(id) } },
      take: 1,
    });
    const nowPost = await prisma.post.findFirst({
      where: { id: Number(id) },
    });
    const nextPost = await prisma.post.findFirst({
      where: { id: { gt: Number(id) } },
      take: 1,
    });
    response.previous = previousPost;
    response.now = nowPost;
    response.next = nextPost;

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.log("err: ", err);
  }
}
