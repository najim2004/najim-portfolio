import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Najim | Portfolio",
  description:
    "Welcome to my portfolio website. I am a full stack web developer specializing in modern web technologies.",
  keywords: [
    "portfolio",
    "web developer",
    "full stack",
    "software engineer",
    "react",
    "next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
