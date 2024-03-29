import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

const IssueDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = params.id;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="2">
          <EditIssueButton id={id} />
          <DeleteIssueButton id={id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
