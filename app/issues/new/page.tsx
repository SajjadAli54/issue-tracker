"use client";

import React, { useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");

  async function onSubmit(data: IssueForm) {
    try {
      const response = await axios.post("/api/issues", data);
      const router = useRouter();
      router.push(`/issues/`);
    } catch (error) {
      setError("An error occurred while creating the issue");
    }
  }

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <h1>Create New Issue</h1>
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && (
          <Text as="div" color="red">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text as="div" color="red">
            {errors.description.message}
          </Text>
        )}
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
