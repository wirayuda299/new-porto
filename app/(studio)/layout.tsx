import type { ReactNode } from "react";

export const metadata = {
  title: "Content management",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
