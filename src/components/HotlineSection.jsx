export default function HotlineSection() {
  return (
    <section className="bg-primary dark:bg-secondary h-auto p-3 flex flex-col items-center mb-4">
      <h2 className="divider divider-neutral text-gray-900 text-3xl font-bold italic">
        We&apos;re Here for You
      </h2>
      <p className="text-xl text-center text-gray-950 mb-2">
        A list of trusted contacts for immediate assistance when you or someone
        you care about needs support.
      </p>
      <ul className="text-zinc-900 font-semibold">
        <li className="text-xl">
          <span className="font-bold">
            National Suicide Prevention Lifeline (USA):
          </span>{" "}
          1-800-273-TALK (8255) or 988
        </li>
        <li className="text-xl">
          <span className="font-bold">Crisis Text Line: </span>Text HOME to
          741741
        </li>
        <li className="text-xl">
          <span className="font-bold">Samaritans (UK): </span>Call 116 123
        </li>
      </ul>
    </section>
  );
}
