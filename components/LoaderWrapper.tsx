"use client"; // This makes sure state is managed on the client side

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); // Show loader for 3 seconds
  }, []);

  return isLoading ? <Loader /> : (
    <>
      <NavBar />
      <main className="overflow-hidden relative">{children}</main>
      <Footer />
    </>
  );
}
