"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Counter from "@/components/Counter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className={`${poppins.className} bg-bg`}>
        {loading ? (
          <div className="fixed inset-0 bg-bg flex items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-card flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent">GB</span>
                </div>
                <div className="absolute -inset-2 rounded-full border-2 border-accent animate-pulse"></div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-2 animate-pulse">
                  Gabriel Baptista
                </h2>
                <p className="text-secondary mb-4">Full Stack & AI Engineer</p>

                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">{children}</div>
        )}
      </body>
      <Counter />
    </html>
  );
}
