"use client";
import { ReactNode } from "react";
import useMiddleware from "./useMiddleware";

const Middleware = ({ children }: { children: ReactNode }) => {
  useMiddleware();
  return children;
};

export default Middleware;
