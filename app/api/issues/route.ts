import { NextRequest } from "next/server";
import { z } from "zod";

import prisma from "@/prisma/client";

const schema = z.object({
  title: z
    .string()
    .min(1, "Minimum of 1 chars")
    .max(255, "Less than 255 characters"),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return new Response(JSON.stringify(validation.error.errors), {
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
