import db from "@/lib";
import { students } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const result = await db.insert(students).values({
    name:data.name,
    grade:data.grade,
    address:data.address,
    contact:data.contact
  });

  return NextResponse.json(result);
}
