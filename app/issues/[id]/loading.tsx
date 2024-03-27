import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Text, Box } from "@radix-ui/themes";

import { Skeleton } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailLoadingPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose flex align-text-top" mt="5">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </Box>
  );
};

export default IssueDetailLoadingPage;
