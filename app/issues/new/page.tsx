"use client";

import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <h1>Create New Issue</h1>
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Description" />
      <Button type="submit">Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
