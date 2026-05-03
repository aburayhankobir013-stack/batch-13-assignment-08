"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { toast } from '@heroui/react';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-6 h-6"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.9 2.3 30.4 0 24 0 14.6 0 6.6 5.4 2.6 13.3l8.1 6.3C12.5 13.1 17.7 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.7c-.3 2-1.7 5-4.7 7l7.2 5.6c4.2-3.9 6.3-9.6 6.3-16.2z"
    />
    <path
      fill="#FBBC05"
      d="M10.7 28.1c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-8.1-6.3C1 16.5 0 20.1 0 23.5s1 7 2.6 9.9l8.1-5.3z"
    />
    <path
      fill="#34A853"
      d="M24 47c6.5 0 11.9-2.1 15.9-5.7l-7.2-5.6c-2 1.4-4.7 2.4-8.7 2.4-6.3 0-11.5-3.6-13.3-8.6l-8.1 6.3C6.6 41.6 14.6 47 24 47z"
    />
  </svg>
);

export default function LogInPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {};

    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });

    const{data, error} = await authClient.signIn.email(
      {
        email: userData.email,
        password: userData.password,
        callbackURL: "/",
        rememberMe: true,
      }
    );
    if(data){
      toast.success("Successfully logedin!");
    }else{
      toast.danger(error.message);
    }
  };

  const handleGoogleSignin = async () => {
      const {data,error} = await authClient.signIn.social({
      provider: "google",
    });
    if(data){
      toast.success("Successfully logedin with google!");
    }else{
      toast.danger(error.message);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center gap-2 bg-linear-to-r linear-to-r from-cyan-400 to-blue-500">
      <Form
        className="flex mx-2 flex-col gap-4 shadow-md rounded-md h-fit p-4 mt-25 bg-white"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
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
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <button
        onClick={handleGoogleSignin}
        className="flex items-center mx-2 gap-2 py-2 px-23 border rounded-md bg-white font-bold text-black hover:shadow-md cursor-pointer"
      >
        <GoogleIcon />
        Continue with Google
      </button>
      <Link href={"/register"}>
        <Button className={"px-42 mx-2 bg-white text-bold text-black rounded-md"} type="submit">Register</Button>
      </Link>
    </div>
  );
}
