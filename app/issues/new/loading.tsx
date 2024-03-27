import { Skeleton, Box } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";

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
