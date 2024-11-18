import JournalPrompts from "./JournalPrompts";

export default function TipsSections() {
  return (
    <div className="my-5 px-4">
      <div className="mb-4">
        <h2 className="text-3xl text-center font-bold mb-2">
          Mood-Tracking and Journaling Tips
        </h2>
        <p className="text-xl font-semibold text-center">
          Mood tracking and journaling are powerful tools to understand and
          manage your emotions. Whether you&apos;re new to the practice or a
          seasoned journaler, these tips will guide you toward emotional
          awareness, helping you spot patterns, release stress, and improve your
          mental well-being.
        </p>
      </div>
      <section className="flex justify-center gap-4 items-center flex-wrap">
        <div className="w-1/2">
          <img
            src="/notebook.jpg"
            alt="journal notebook"
            className="rounded-lg shadow-md w-full h-96 object-cover"
          />
        </div>
        <div className="w-1/2">
          <ul className="flex flex-col justify-evenly gap-2">
            <li className="text-lg">
              <span className="font-semibold text-secondary">
                Consistency is Key
              </span>
              : Dedicate 5-10 minutes daily to track your mood or write in your
              journal. The more regular you are, the more meaningful patterns
              you can uncover.
            </li>
            <li className="text-lg">
              <span className="font-semibold text-secondary">
                Mood Patterns
              </span>
              : Use your tracker to identify triggers or recurring feelings. Are
              certain activities, times of the day, or interactions linked to
              specific moods?
            </li>
            <li className="text-lg">
              <span className="font-semibold text-secondary">
                Set Goals for Growth
              </span>
              : Use your entries to set achievable goals—like spending more time
              on hobbies or improving communication with a loved one.
            </li>
            <li className="text-lg">
              <span className="font-semibold text-secondary">Be Honest</span>:
              This is your private space. Don&apos;t censor your feelings or
              thoughts—embrace them to understand yourself better.
            </li>
            <li className="text-lg">
              <span className="font-semibold text-secondary">
                Reflection Time
              </span>
              : Spend a few minutes at the end of each week reviewing your
              entries. Use this time to think about small adjustments for the
              week ahead.
            </li>
          </ul>
          <h3 className="text-lg font-semibold my-2 text-primary">
            Stuck? Guided Prompts for Your Journaling Journey:
          </h3>
          <JournalPrompts />
        </div>
      </section>
    </div>
  );
}
