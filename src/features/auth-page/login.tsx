"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[500px] shadow-xl shadow-cyan-500/50 ">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex gap-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src={"ai-icon.png"} />
          </Avatar>
          <span className="text-primary text-3xl flex items-center">{AI_NAME}</span>
        </CardTitle>
        <CardDescription>
          <span className="text-2xl">
          Login in with your Microsoft 365 account
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <Button onClick={() => signIn("azure-ad")}> Microsoft 365</Button>
      </CardContent>
    </Card>
  );
};
