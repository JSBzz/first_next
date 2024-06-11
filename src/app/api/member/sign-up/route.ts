import CommonResponse from "@/app/_model/CommonResponse";
import BadRequestError from "@/app/_utils/BadRequestError";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

interface RequestBody {
  email: string;
  nickname: string;
  password: string;
  image: string;
  providerType: string;
  providerCode: string;
}

export async function POST(request: Request) {
  const response: CommonResponse = { data: {}, status: 201 };
  try {
    const body: RequestBody = await request.json();
    if (!body?.email || !body?.password || !body?.nickname)
      throw new BadRequestError("REQUEST_PARAM_ERROR", 400);
    const user = await prisma.user.create({
      select: {
        nickname: true,
        email: true,
        image: true,
        provider_type: true,
      },
      data: {
        email: body.email,
        nickname: body.nickname,
        image: body?.image,
        password: await bcrypt.hash(body.password, 10),
        provider_type: body?.providerType ?? "",
        provider_code: body?.providerCode ?? "",
      },
    });
    if (!user) throw new BadRequestError("REQUEST_ERROR", 404);
    response.data = user;
  } catch (err: any) {
    console.log("err: ", err);
    err as BadRequestError | Error;
    response.status = err?._code;
  } finally {
    return NextResponse.json(response.data, {
      status: response?.status,
    });
  }
}
