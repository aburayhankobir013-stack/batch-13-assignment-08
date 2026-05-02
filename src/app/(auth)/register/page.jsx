"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function RegisterPage() {
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {};

    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });
      await authClient.signUp.email(
      {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        image: userData.imageURL,
      },
      {
        onRequest: (ctx) => {
        },
        onSuccess: (ctx) => {
          router.push("/");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  };
  return (
    <div className="min-h-screen flex justify-center bg-linear-to-r linear-to-r from-cyan-400 to-blue-500">
      <Form
        className="flex w-96 flex-col gap-4 shadow-md rounded-md h-fit p-4 mt-25 bg-white"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" className={"rounded-md"} />
        </TextField>
        <TextField name="imageURL" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Enter your image url" className={"rounded-md"} />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" className={"rounded-md"} />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className={"rounded-md"} />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Register
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
