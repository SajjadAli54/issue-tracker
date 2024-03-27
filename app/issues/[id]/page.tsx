import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { Pencil2Icon } from "@radix-ui/react-icons";

import ReactMarkDown from "react-markdown";
import Link from "next/link";

interface IssueDetailPageProps {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: IssueDetailPageProps) => {
  const id = params.id;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="5">
          <ReactMarkDown>{issue.description}</ReactMarkDown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${id}/edit`}>Edit</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
