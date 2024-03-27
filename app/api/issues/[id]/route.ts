import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const json = await request.json();
  let { id: idStr } = params;
  const id = parseInt(idStr);
  const validation = await issueSchema.safeParse(json);

  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.format() },
      { status: 400 }
    );
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: id,
    },
  });

  if (!issue) {
    return NextResponse.json({ errors: "Issue not found" }, { status: 404 });
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: id,
    },
    data: {
      title: json.title,
      description: json.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
