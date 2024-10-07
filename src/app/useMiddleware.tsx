"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const protectedRoutes = [
  {
    path: "/users",
  },
];

const useMiddleware = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = () => {
    const isProtectedRoute = protectedRoutes.some(
      (route) => pathname.includes(route.path) // Check if pathname starts with the protected route
    );
    const isAuthenticated = session?.user?.email;

    if (!isAuthenticated && isProtectedRoute) {
      router.replace("/unauthorized");
    }
  };

  useEffect(() => {
    if (status === "authenticated" || status === "unauthenticated") {
      checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, pathname]);

  return null;
};

export default useMiddleware;
