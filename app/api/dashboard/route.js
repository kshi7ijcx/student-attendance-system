import db from "@/lib";
import { attendance, students } from "@/lib/schema";
import { sql, and, eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const date = searchParams.get("date");
  const grade = searchParams.get("grade");

  const result = await db
    .select({
      day: attendance.day,
      presentCount: sql`count(${attendance.day})`,
    })
    .from(attendance)
    .leftJoin(students, and(eq(attendance.studentId, students.id),eq(attendance.date, date)))
    .groupBy(attendance.day)
    .where(eq(students.grade, grade))
    .orderBy(desc(attendance.day))
    .limit(7);

  return NextResponse.json(result);
}
