"use client";

import { SessionProvider as SessionLucia } from "next-auth/react";
import Middleware from "./Middleware";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionLucia>
      <Middleware>{children}</Middleware>
    </SessionLucia>
  );
}
