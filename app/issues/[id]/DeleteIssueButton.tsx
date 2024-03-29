import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ id }: { id: string }) => {
  return (
    <Button color="red">
      <Link href={""}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
