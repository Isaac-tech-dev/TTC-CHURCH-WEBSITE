import type { Metadata } from "next";
import "./globals.css";
import LoaderWrapper from "@/components/LoaderWrapper";

export const metadata: Metadata = {
  title: "The Triumphant Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoaderWrapper>{children}</LoaderWrapper>
      </body>
    </html>
  );
}
