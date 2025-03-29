"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Hide loader after timeout

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50`}
    >
      {/* Animated Container */}
      <div className={`flex flex-col items-center`}>
        {/* Logo - Slides in from left & then bounces */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start position (left)
          animate={{
            x: 0, // Moves to center
            opacity: 1,
            y: [0, -10, 0], // Bouncing effect
          }}
          transition={{
            duration: 2, // Slide-in duration
            ease: "easeOut",
            y: {
              duration: 1.5, // Bouncing duration
              repeat: Infinity, // Repeat bounce
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/new/Logo2.png"
            alt="Logo"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        {/* Text - Slides in from right & then bounces */}
        {/* <motion.p
          className={`text-[50px] font-bold text-[#231F60]`}
          initial={{ x: 100, opacity: 0 }} // Start position (right)
          animate={{
            x: 0, // Moves to center
            opacity: 1,
            y: [0, -10, 0], // Bouncing effect
          }}
          transition={{
            duration: 1, // Slide-in duration
            ease: "easeOut",
            y: {
              duration: 1.5, // Bouncing duration
              repeat: Infinity, // Repeat bounce
              ease: "easeInOut",
            },
          }}
        >
          The Triumphant Community
        </motion.p> */}
      </div>
    </div>
  );
};

export default Loader;
