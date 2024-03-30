import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//API to Create multiple entry
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const result = await prisma.users.createMany({
      data: reqBody,
    });
    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}

//API to Find multiple entry
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.findMany({});
    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
