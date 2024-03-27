import { Box, Card, Flex } from "@radix-ui/themes";

import { Skeleton } from "@/app/components";

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
