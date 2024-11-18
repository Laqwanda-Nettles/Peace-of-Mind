import BreathingExercise from "./BreathingExercise";

export default function GuidedMeditationSection() {
  return (
    <section className="bg-neutral mt-5 p-4 flex flex-col justify-evenly gap-4">
      <div>
        <h2 className="text-3xl font-bold text-center mb-2">
          Guided Meditation
        </h2>
        <p className="text-xl font-semibold text-center">
          Dive into the world of mindfulness with our handpicked guided
          meditations. Whether you&apos;re a beginner or an experienced
          meditator, these resources will help you recharge, focus, and find
          inner peace. Start your journey toward a calmer you today.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        <div>
          <iframe
            className="rounded-2xl"
            src="https://widgets.insighttimer.com/track/morning-gratitude-intention-meditation?created_at=1731898758"
            width="100%"
            height="250px"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col items-center">
          <img src="/meditate.png" alt="a lady meditating" className="h-60" />
          <button
            className="btn btn-outline btn-secondary dark:btn-info text-lg"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Start Breathing Exercise
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-8">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <BreathingExercise />
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Explore More</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://www.headspace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Headspace
            </a>
            : Access guided meditations, sleep sounds, and mindfulness exercises
            for all levels.
          </li>
          <li>
            <a
              href="https://www.calm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Calm
            </a>
            : A library of meditations, sleep stories, and soothing music to
            help you unwind.
          </li>
          <li>
            <a
              href="https://insighttimer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Insight Timer
            </a>
            : Discover thousands of free guided meditations and courses led by
            mindfulness experts.
          </li>
        </ul>
      </div>
    </section>
  );
}
