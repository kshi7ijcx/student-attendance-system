import db from "@/lib/index";
import { NextResponse } from "next/server";
import { grades } from "@/lib/schema";
import { sql } from "drizzle-orm";

export async function GET(req) {
  const result = await db.execute(sql`select * from ${grades};`) ;
  return NextResponse.json(result['rows']);
}
