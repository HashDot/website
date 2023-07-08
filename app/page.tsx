import classNames from "classnames";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col gap-10 items-center">
        <Services />
        <CTA />
        <Customers />
      </div>
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
      style: "bg-sky-200 text-sky-900",
      headline: "text-sky-700",
    },
    {
      title: "Backend",
      text: `Harness the power of Node.js, NestJS, and TypeScript with my top-notch Backend Development services! I specialize in building robust and scalable web applications. By leveraging Node.js, I create high-performance backend systems that handle heavy workloads with ease. NestJS, a progressive Node.js framework, offers a structured and modular approach to development, ensuring clean and maintainable code. With the type safety and enhanced productivity of TypeScript, I deliver efficient and error-free solutions.`,
      style: "bg-purple-200 text-purple-900",
      headline: "text-purple-700",
    },
    {
      title: "DevOps",
      text: `Unlock the potential of DevOps with my expertise in Docker, Kubernetes, and CI/CD! I offer comprehensive DevOps solutions to streamline your development and deployment processes. By utilizing Docker, I enable efficient containerization of your applications, ensuring portability and scalability. Kubernetes orchestrates these containers, providing automated deployment, scaling, and management. With robust CI/CD pipelines, I automate the build, testing, and deployment phases, reducing errors and accelerating time-to-market. `,
      style: "bg-green-200 text-green-900",
      headline: "text-green-700",
    },
  ];
  return (
    <div className="w-full max-w-screen-lg relative gap-5 flex flex-col mt-10">
      <h1 className="text-4xl uppercase font-light">What can I do for you?</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
        {list.map((service, index) => {
          return (
            <div
              className={classNames(
                "flex flex-col lg:gap-3 mb-5 lg:mb-0"
                // service.style
              )}
              key={service.title}
            >
              <h2 className={classNames("text-4xl", service.headline)}>
                {service.title}
              </h2>
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
