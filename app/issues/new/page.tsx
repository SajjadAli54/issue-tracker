"use client";

import React from "react";
import { TextField, Button, TextArea } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <h1>Create New Issue</h1>
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button type="submit">Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
