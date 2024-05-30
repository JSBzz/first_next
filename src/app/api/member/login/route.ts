import CommonResponse from "@/app/_model/CommonResponse";
import BadRequestError from "@/app/_utils/BadRequestError";
import JWT from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const response: CommonResponse = { data: {}, status: 200 };
  let token = "";
  try {
    if (!body?.email) throw new BadRequestError("Please Write ID, PASSWORD", 400);

    const user = await prisma.user.findFirst({
      select: {
        id: true,
        password: true,
        email: true,
        nickname: true,
        image: true,
        is_delete: true,
        provider_type: true,
      },
      where: { email: body.email },
    });

    if (!user) throw new BadRequestError("ID NOT FOUND", 404);
    response.data = user;
    const { password, ...userInfo } = user;
    token = JWT.sign(userInfo, process.env.AUTH_SECRET!);
  } catch (err: any) {
    err as BadRequestError | Error;
    response.status = err?._code;
  } finally {
    return NextResponse.json(response.data, {
      status: response?.status,
      headers: { "Set-Cookie": token },
    });
  }
}
