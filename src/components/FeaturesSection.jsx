import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="mb-8 relative">
      <h2 className="text-3xl font-bold text-center">Discover Our Features</h2>
      <div className="mt-6 relative">
        <div className="hidden md:block absolute top-36 bg-success dark:bg-primary -z-10 h-36 w-full md:my-6 lg:my-12"></div>
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-5 p-5">
          <FeatureCard
            src="/journal.jpg"
            title="Personal Journal"
            description="Write and reflect in a secure, private space designed to support
                your growth."
          />
          <FeatureCard
            src="/mood.jpg"
            title="Mood Tracker"
            description="Visualize emotional patterns to gain insights into your mental
              well-being."
          />
          <FeatureCard
            src="/resources.jpg"
            title="Resources"
            description="Access inspirational quotes, self-care tips, and curated mental
              health guides."
          />
          <FeatureCard
            src="/secure.jpg"
            title="Secure Authentication"
            description="Protect your mental health data with Magic Link authentication."
          />
        </div>
      </div>
    </section>
  );
}
