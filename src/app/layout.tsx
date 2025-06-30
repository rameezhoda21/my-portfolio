// src/app/layout.tsx
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Rameez Hoda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{metadata.title}</title>

        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind custom config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#8b5cf6',
                      accent: '#c084fc',
                    },
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-transparent text-white">
        {children}
      </body>
    </html>
  );
}
