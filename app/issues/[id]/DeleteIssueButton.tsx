"use client";

import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import delay from "delay";

const DeleteIssueButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteIssue = async () => {
    await delay(500);
    try {
      setIsDeleting(true);
      await axios.delete(`/api/issues/${id}`);
      router.push("/issues");
    } catch (error) {
      setError(true);
    }
    setIsDeleting(false);
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={isDeleting}>
            Delete
            {isDeleting && <Spinner />}
          </Button>
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
              <Button color="red" onClick={handleDeleteIssue}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            There was an error deleting the issue. So, We could not delete the
            issue
          </AlertDialog.Description>
          <AlertDialog.Action>
            <Button
              mt="2"
              color="gray"
              variant="soft"
              onClick={() => setError(false)}
            >
              OK
            </Button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
