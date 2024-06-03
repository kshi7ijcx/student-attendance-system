import db from "@/lib";
import { students } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const result = await db.insert(students).values({
    name: data.name,
    grade: data.grade,
    address: data.address,
    contact: data.contact,
  });

  return NextResponse.json(result);
}

export async function GET(req) {
  const result = await db.execute(sql`select * from ${students}`);
  return NextResponse.json(result["rows"]);
}

export async function DELETE(req) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const result = await db.delete(students).where(eq(students.id, id));
  return NextResponse.json(result);
}
