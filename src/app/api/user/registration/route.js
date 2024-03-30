import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//API to create single entry
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}

//API to Delete single entry
export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const roll = searchParams.get("roll");
    const prisma = new PrismaClient();
    let result = await prisma.users.delete({
      where: { roll: roll },
    });

    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

//API to Update single entry
export async function PUT(req, res) {
  try {
    let reqBody = await req.json();
    const { searchParams } = new URL(req.url);
    const roll = searchParams.get("roll");

    const prisma = new PrismaClient();
    let result = await prisma.users.update({
      data: reqBody,
      where: { roll: roll },
    });

    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
