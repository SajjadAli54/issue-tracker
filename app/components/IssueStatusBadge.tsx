import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface IssueStatusBadgeProps {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: String; color: "red" | "green" | "violet" }
> = {
  OPEN: {
    label: "Open",
    color: "red",
  },
  RESOLVED: {
    label: "Closed",
    color: "violet",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "green",
  },
};

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  const obj = statusMap[status];
  return <Badge color={obj.color}>{obj.label}</Badge>;
};

export default IssueStatusBadge;
