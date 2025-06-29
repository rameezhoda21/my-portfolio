// src/app/layout.tsx
import React from "react";

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

        {/* Tailwind CDN + Config BEFORE render */}
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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-transparent">
        <div className="hidden bg-primary bg-accent text-accent text-primary" />
        {children}
      </body>
    </html>
  );
}
