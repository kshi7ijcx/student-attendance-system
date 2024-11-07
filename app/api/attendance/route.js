import db from "@/lib";
import { attendance, students } from "@/lib/schema";
import { and, eq, isNull, or } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const grade = searchParams.get("grade");
  const month = searchParams.get("month");
  const result = await db
    .select({
      name: students.name,
      present: attendance.present,
      day: attendance.day,
      date: attendance.date,
      grade: students.grade,
      studentId: students.id,
      attendanceId: attendance.id,
    })
    .from(students)
    .leftJoin(attendance, eq(students.id, attendance.studentId))
    .where(or(eq(attendance.date, month), isNull(attendance.date)))
    .where(eq(grade, students.grade));
  return NextResponse.json(result);
}

export async function POST(req, res) {
  const data = await req.json();
  const result = await db.insert(attendance).values({
    studentId: data.studentId,
    present: data.present,
    day: data.day,
    date: data.date,
  });

  return NextResponse.json(result);
}

export async function DELETE(req) {
  const searchParams = req.nextUrl.searchParams;
  const studentId = searchParams.get("studentId");
  const date = searchParams.get("date");
  const day = searchParams.get("day");
  console.log(studentId,day,date)
  const result = await db
    .delete(attendance)
    .where(
      and(
        eq(attendance.studentId, studentId),
        eq(attendance.day, day),
        eq(attendance.date, date)
      )
    );

  return NextResponse.json(result);
}
