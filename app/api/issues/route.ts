import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import prisma from "@/prisma/client";

const schema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Less than 255 characters"),
  description: z.string().min(1, "Description is required"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return new Response(JSON.stringify(newIssue), { status: 201 });
}
