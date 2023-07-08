import './globals.css'
import { Roboto_Mono, Recursive } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

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
        <div className="flex flex-col items-center justify-between">
          <Link href="/" className="w-full max-w-screen-lg">
            <div className="relative h-[450px] flex items-end justify-end">
              {/* <Stripes /> */}

              <div className="rotate-90 absolute top-32 -left-10">
                <div className="text-6xl font-semibold">Lars</div>
                <div className="text-8xl font-bold font-sans">Hampe</div>
                <div className="font-mono">Typescript Fullstack Developer</div>
              </div>

              <Image
                src="/hashdot.png"
                alt="Picture of Lars"
                width={400}
                height={400}
              />

              <Image
                src="/logo.svg"
                width={100}
                height={100}
                alt="HashDot Logo"
              />
            </div>
          </Link>

          <div className="bg-neutral-900 grid grid-cols-2 md:grid-cols-4 rounded-lg py-5 px-10 text-white w-full gap-5 max-w-screen-lg">
            <div className="flex flex-col">
              <span className="font-bold">.mail</span>
              <a href="mailto:hello@hashdot.co">hello@hashdot.co</a>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">.phone</span>{" "}
              <a href="tel:+4955120019224">+49 (0)551 200 19 224</a>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">.meet</span>{" "}
              <a href="https://cal.com/hashdot">cal.com/hashdot</a>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">.github</span>{" "}
              <a href="https://github.com/hashdot">github.com/hashdot</a>
            </div>
          </div>
        </div>

        {children}

        <footer className="w-full flex items-center justify-center mt-10">
          <div className="w-full max-w-screen-lg flex justify-between">
            <div>&copy; {new Date().getFullYear()} Lars Hampe</div>

            <div>
              <Link href="/impressum">Imprint</Link>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
