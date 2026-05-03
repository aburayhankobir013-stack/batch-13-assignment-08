"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function UpdateProfileForm() {
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });
    const { data, error } = await authClient.updateUser({
      image: userData.imageURL,
      name: userData.name,
    });
    if (data) {
      toast.success("Profile Successfully Updated!");
      router.push("/profile");
    } else {
      toast.danger(error.message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center bg-linear-to-r linear-to-r from-cyan-400 to-blue-500">
      <Form
        className="flex mx-2 flex-col gap-4 bg-white h-fit mt-25 p-4 rounded-md shadow-md"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name to update" />
          <FieldError />
        </TextField>
        <TextField isRequired name="imageURL" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Enter your image url to update" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
