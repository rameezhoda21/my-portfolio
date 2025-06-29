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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        {/* If using Tailwind CDN temporarily during development, avoid for production */}
        {/* You can remove the CDN once Tailwind is properly configured via PostCSS */}
        <script src="https://cdn.tailwindcss.com" async></script>
        <script
          async
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
      </head>
      <body className="bg-transparent">
        {/* Invisible element to register Tailwind class with CDN */}
        <div className="hidden bg-black"></div>
        {children}
      </body>
    </html>
  );
}
