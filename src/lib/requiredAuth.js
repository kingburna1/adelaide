
import { verifyToken } from "@/lib/auth";

export async function getUserFromRequest(req) {
  const cookie = req.headers.get("cookie") || "";
  const token = cookie.split(";").map(c => c.trim()).find(c => c.startsWith("token="));
  if (!token) return null;
  const raw = token.split("=")[1];
  const payload = verifyToken(raw);
  return payload; // contains id, email, iat, exp
}
