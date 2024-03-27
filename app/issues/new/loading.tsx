import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssueMessage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Box className="mt-3">
        <Skeleton height="20rem" />
      </Box>
    </Box>
  );
};

export default LoadingNewIssueMessage;
