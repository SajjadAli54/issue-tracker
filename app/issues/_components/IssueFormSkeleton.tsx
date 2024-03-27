import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" className="mb-3" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
