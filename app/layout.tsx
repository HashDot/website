import './globals.css'
import { Roboto_Mono, Recursive } from "next/font/google";

const recursive = Recursive({
  subsets: ["latin"],
  variable: "--font-recursive",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Lars Hampe",
  description: "Lets work together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${recursive.variable} ${roboto_mono.variable} font-sans px-10 lg:px-0`}
      >
        {children}
      </body>
    </html>
  );
}
