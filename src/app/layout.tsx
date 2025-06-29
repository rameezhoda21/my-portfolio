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
      <body className="bg-transparent">
        {/* Tailwind CDN and custom theme (moved here) */}
        <script src="https://cdn.tailwindcss.com"></script>
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
                    spacing: {
                      '28': '7rem',
                      '32': '8rem',
                    },
                    zIndex: {
                      '-10': '-10',
                    },
                  }
                }
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
