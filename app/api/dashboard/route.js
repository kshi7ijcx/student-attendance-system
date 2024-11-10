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
    .innerJoin(students, eq(attendance.studentId, students.id))
    .groupBy(attendance.day)
    .where(and(eq(attendance.date, date), eq(students.grade, grade)))
    .orderBy(desc(attendance.day))
    .limit(7);

  return NextResponse.json(result);
}
