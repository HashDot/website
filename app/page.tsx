import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const Stripes = () => {
  return (
    <div className="absolute left-[50%] right-[50%] top-20">
      <div className="relative w-full">
        <div className=" absolute bg-violet-700 rounded-full w-64 h-64 top-[50px] right-[50px] " />
        <div className="absolute bg-violet-600 rounded-full w-32 h-56 top-5 right-[10px] " />
        <div className="absolute bg-violet-500 rounded-full w-32 h-48 top-[40px] right-[-30px] " />
        <div className="absolute bg-violet-400 rounded-full w-32 h-40 top-16 left-[20px] " />
        <div className="absolute bg-violet-300 rounded-full w-32 h-32 top-20 left-[-20px]" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full max-w-screen-lg relative h-[450px] flex items-end justify-end">
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

        <Image src="/logo.svg" width={100} height={100} alt="HashDot Logo" />
      </div>

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

      <div className="flex flex-col gap-10 items-center">
        <Services />
        <CTA />
        <Customers />
      </div>

      <footer className="w-full flex items-center justify-center mt-10">
        <div className="w-full max-w-screen-lg flex justify-between">
          <div>&copy; {new Date().getFullYear()} Lars Hampe</div>

          <div>
            <Link href="/impressum">Imprint</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

const CTA = () => {
  return (
    <div className="bg-neutral-900 w-full rounded-lg flex items-center justify-center">
      <div className="w-full max-w-screen-lg p-10 flex flex-col gap-5">
        <h3 className="text-6xl text-primary font-sans">
          Kickoff your next project!
        </h3>
        <p className="text-neutral-200 text-xl">
          Looking for professional assistance in frontend, backend, and DevOps?
          I offer tailored solutions for your web development and infrastructure
          needs. Let&apos;s work together on your project and drive it to
          success. Contact me now to learn more and get started!
        </p>
        <a
          className="bg-primary text-neutral-900 hover:bg-neutral-700 hover:text-white text-xl transition p-5 rounded-lg"
          href="mailto:hello@hashdot.co?subject=Kickoff my project!&body=Lets do it!"
        >
          Let&apos;s do it!
        </a>
      </div>
    </div>
  );
};

const Customers = () => {
  const list = [
    { name: "Hornbach", logo: "/customers/hornbach.svg" },
    { name: "Peek & Cloppenburg", logo: "/customers/peek_cloppenburg.svg" },
    { name: "Convex Energy", logo: "/customers/convex_energy.svg" },
    { name: "esentri", logo: "/customers/esentri.webp" },
  ];
  return (
    <div className="flex flex-col items-start justify-start w-full max-w-screen-lg gap-5">
      <h1 className="text-4xl uppercase font-light">Customers</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
        {list.map((customer) => {
          return (
            <div
              key={customer.name}
              className="hover:bg-neutral-300 transition rounded-lg h-40 bg-neutral-200 flex flex-col items-center justify-center"
            >
              <Image
                src={customer.logo}
                width={150}
                height={50}
                alt={customer.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Services = () => {
  const list = [
    {
      title: "Frontend",
      text: `Benefit from my comprehensive expertise in Frontend Development! With React and Tailwind CSS as powerful tools, I create tailored, modern, and engaging web applications that showcase your brand effectively. From conceptualization to design and implementation, I prioritize a seamless user experience and optimal performance. Entrust me with the implementation of your web application and enjoy a first-class result that will captivate your target audience. `,
      style: "bg-sky-500 text-sky-100",
    },
    {
      title: "Backend",
      text: `Harness the power of Node.js, NestJS, and TypeScript with my top-notch Backend Development services! I specialize in building robust and scalable web applications. By leveraging Node.js, I create high-performance backend systems that handle heavy workloads with ease. NestJS, a progressive Node.js framework, offers a structured and modular approach to development, ensuring clean and maintainable code. With the type safety and enhanced productivity of TypeScript, I deliver efficient and error-free solutions.`,
      style: "bg-purple-500 text-purple-100",
    },
    {
      title: "DevOps",
      text: `Unlock the potential of DevOps with my expertise in Docker, Kubernetes, and CI/CD! I offer comprehensive DevOps solutions to streamline your development and deployment processes. By utilizing Docker, I enable efficient containerization of your applications, ensuring portability and scalability. Kubernetes orchestrates these containers, providing automated deployment, scaling, and management. With robust CI/CD pipelines, I automate the build, testing, and deployment phases, reducing errors and accelerating time-to-market. `,
      style: "bg-green-500 text-green-100",
    },
  ];
  return (
    <div className="w-full max-w-screen-lg relative gap-5 flex flex-col mt-10">
      <h1 className="text-4xl uppercase font-light">What can I do for you?</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {list.map((service, index) => {
          return (
            <div
              className={classNames(
                "p-5 flex flex-col gap-3 "
                // service.style
              )}
              key={service.title}
            >
              <h2 className="text-4xl text-neutral-400 ">{service.title}</h2>
              <p
                className={classNames(
                  "text-white text-lg rounded-lg p-5 ",
                  service.style
                )}
              >
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
