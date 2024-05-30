import { PrismaClient } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface RequestBody {
  contents: string;
  title: string;
  userId: number;
}

export async function GET(request: NextRequest, { params: { id } }: Params) {
  try {
    const response = await prisma.post.findUnique({
      where: { id: Number(id) },
      include: { user: true },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.log("err: ", err);
  }
}
