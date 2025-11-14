import clientPromise from "@/lib/mongodb";

import { getUserFromRequest } from "@/lib/requiredAuth"; 

import { ObjectId } from "mongodb"; 

export async function GET(req) {
  const userPayload = await getUserFromRequest(req);
  if (!userPayload) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db("adelaagri_db");
  const user = await db.collection("users").findOne({ _id: new ObjectId(userPayload.id) }, { projection: { password: 0 } });

  return new Response(JSON.stringify({ user }), { status: 200, headers: { "Content-Type": "application/json" } });
}