import db from "@/lib";
import { students } from "@/lib/schema";
import { sql } from "drizzle-orm";
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
  const result = db.execute(sql`select * from ${students}`);
  return NextResponse.json(result);
}
