import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { json } from "stream/consumers";
import jwt from "jsonwebtoken";
const bcrypt = require("bcrypt");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log(email);

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new Error("Invalid email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1m",
    });

    return new Response(
      JSON.stringify({
        token,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Error("Something went wrong");
  }
}
