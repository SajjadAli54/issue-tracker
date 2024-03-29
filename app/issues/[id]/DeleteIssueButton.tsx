"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ id }: { id: string }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Issue Confirmation</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This Action can not be
          undone
        </AlertDialog.Description>
        <Flex mt={"4"} gap={"3"}>
          <AlertDialog.Cancel>
            <Button color="gray" variant="soft">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">
              <Link href={""}>Delete Issue</Link>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
