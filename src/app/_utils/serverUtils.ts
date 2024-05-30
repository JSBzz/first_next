import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";

export function clientJWTUserInfo() {
  let userInfo = null;
  try {
    const token = cookies().get("coonect.sid")?.value;
    if (!token) return null;
    decode(token);
  } finally {
    return userInfo;
  }
}
