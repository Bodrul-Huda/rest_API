import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//API to Find single entry
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    const roll = searchParams.get("roll");

    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const result = await prisma.users.findUnique({
      where: { roll: roll },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
