// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>My Portfolio</title>
      {/* Tailwind via CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Optional: inject your theme overrides */}
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
    </>
  );
}
