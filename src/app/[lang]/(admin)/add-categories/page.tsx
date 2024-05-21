"use client";

import Container from "@/components/container";
import H2 from "@/components/h2";
import Input from "@/components/input";
import SaveButton from "./SaveButton";
import SelectInput from "./SelectInput";
import { useFormState } from "react-dom";
import { AddCategoryResponseType, addCategory } from "./action";

function FormInput({
  label,
  ...props
}: { label: string } & React.ComponentPropsWithRef<"input">) {
  return (
    <div className="w-full">
      <p className="mb-2">{label}</p>
      <Input type="text" {...props} />
    </div>
  );
}

export default function AddCategories() {
  const initialState: { message: string } = {
    message: "null",
  };
  const [formState, formAction] = useFormState(addCategory, initialState);

  const options = [
    { name: "No parent category", id: "-1" },
    { name: "Men", id: "0" },
    { name: "Women", id: "1" },
    { name: "Children", id: "2" },
  ];

  return (
    <Container className="mt-20">
      <H2 className="mb-8">Add Category</H2>

      <form action={formAction}>
        <div className="mb-4 flex gap-12">
          <FormInput name="category-name" label="Title" />

          <FormInput
            name="category-long-name"
            label="Long title"
            className=""
          />
        </div>

        <div className="mb-4">
          <p className="mb-2">Parent category</p>

          <SelectInput
            name="category-parent-id"
            initialValue={"-1"}
            options={options}
          />
        </div>

        <div className="mb-4">
          <p className="mb-2">Description</p>
          <textarea
            name="category-description"
            className="w-full rounded-md border border-zinc-200 p-4 text-sm outline-none ring-gold-500 focus:ring-2"
            rows={5}
            maxLength={500}
          ></textarea>
        </div>

        <div className="mb-8 flex gap-12">
          <FormInput name="category-img" label="Image Source" />
        </div>

        <div className="flex items-center gap-4">
          <SaveButton className="" />
          <p>
            {formState?.message === "success" ? "Success added category" : ""}
          </p>
          <p>
            {formState?.message === "error" ? "An unknown error happened." : ""}
          </p>
        </div>
      </form>
    </Container>
  );
}
