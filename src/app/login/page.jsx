"use client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter()
  const onSubmit =async(e) =>{
    e.preventDefault();

    const formData = new FormData (e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error} = await authClient.signIn.email({
    email:user.email,
    password:user.password,
    

    });
     if(data){
      router.push("/");
     }

     if(error){
// toast
    alert("error")
     }
  };
  return (
     <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Login-Page</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        

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
          <Input placeholder="john@example.com" />
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
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex justify-center gap-2 w-full">
          <Button className={'rounded-none w-full'} type="submit">
            
            Login
          </Button>
         
        </div>
      </Form>
      
     
    </Card>
  );
}


export default LoginPage;