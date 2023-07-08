export default function Imprint() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full max-w-screen-lg relative flex flex-col items-start justify-start mt-12">
        <h1 className="text-4xl">Imprint</h1>

        <h2 className="text-2xl mt-10">Information according to § 5 TMG</h2>

        <p>Lars Hampe</p>
        <br />
        <p>Address available upon request.</p>

        <h2 className="text-2xl mt-10">Contact</h2>

        <p>
          Phone: <a href="tel:+4955120019224">+49 (0)551 200 19 224</a>
        </p>
        <p>
          E-Mail: <a href="mailto:hello@hashdot.co">hello@hashdot.co</a>
        </p>

        <h2 className="text-2xl mt-10">Responsible for editorial content</h2>

        <p>Lars Hampe</p>
      </div>
    </main>
  );
}
