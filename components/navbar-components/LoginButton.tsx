import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LoginButton = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <Link href="/login" passHref>
        <Button
          variant="ghost"
          className={cn(
            " cursor-pointer bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700",
            pathname === "/login" && "bg-violet-700 dark:bg-violet-700"
          )}
        >
          Login
        </Button>
      </Link>
    </>
  );
};

export default LoginButton;
