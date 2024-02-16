'use server';

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/lib/db";
import jwt from "jsonwebtoken";
const bcrypt = require("bcrypt");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new Response("Invalid email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return new Response("Invalid password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
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
    return new Response("Login failed", {
			status: 500,
		});
  }
}


export async function GET(req: Request) {
	const token = req.headers.get("Authorization");
	
	if (!token) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}
	
	try {
		const HeaderInstance = headers();
		const authHeader = HeaderInstance.get("Authorization");
		
		if (!authHeader) {
			return new Response("Unauthorized", {
				status: 401,
			});
		}
	
		const token = authHeader.split(" ")[1];
		
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await db.user.findUnique({
			where: {
				id: decoded.userId,
			},
		});

		if (!user) {
			return new Response("Unauthorized", {
				status: 401,
			});
		}

		return new Response(
			JSON.stringify({
				user,
			}),
			{
				headers: {
					"Content-Type": "application/json",
				},
				status: 200,
			}
		);
	} catch (error) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}
}
