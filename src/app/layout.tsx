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

        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          // Configure your custom theme colors, spacing, etc.
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
        {children}
      </body>
    </html>
  );
}