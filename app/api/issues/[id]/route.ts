import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const json = await request.json();
  const id = parseInt(params.id);
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

export async function DELETE(request: NextRequest, { params }: Params) {
  const id = parseInt(params.id);
  const issue = await prisma.issue.findUnique({
    where: {
      id: id,
    },
  });

  if (!issue) {
    return NextResponse.json({ errors: "Issue not found" }, { status: 404 });
  }

  await prisma.issue.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
