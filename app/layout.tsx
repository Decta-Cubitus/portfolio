import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider.js";

export const metadata: Metadata = {
  title: 'Joel Portfolio',
  description: 'Portfolio web de Joel, desarrollador web y programador.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
