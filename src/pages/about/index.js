import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Navbar />
      <header className="bg-info curved-header text-center h-32 flex flex-col justify-center mb-5">
        <h2 className="text-4xl font-extrabold">About Peace of Mind</h2>
        <p className="text-xl mt-2 italic">
          Your Journey to Wellness Starts Here
        </p>
      </header>
      <section className="text-xl p-8 mb-5">
        <p>
          Welcome to <span className="font-semibold italic">Peace of Mind</span>
          , your personal companion for mental health and well-being. Our goal
          is to provide you with a safe, private space to explore your thoughts,
          track your emotions, and find inspiration through curated mental
          health resources.
        </p>
      </section>
      <section className="bg-neutral dark:bg-base-200 shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center">Our Mission</h2>
        <p className="mt-4 text-xl">
          Empowering growth, one entry at a time. At{" "}
          <span className="font-semibold italic">Peace of Mind</span>, we
          believe mental wellness is a journey, not a destination. Our mission
          is to support this journey by providing tools to reflect, grow, and
          thrive.
        </p>
      </section>
      <FeaturesSection />
      <section className="bg-neutral dark:bg-base-200 shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center">Why Peace of Mind?</h2>
        <p className="mt-4 text-xl">
          <span className="font-semibold italic">Peace of Mind</span>{" "}
          prioritizes your privacy and well-being. We understand how crucial it
          is to feel safe while expressing your thoughts. Our tools are easy to
          use and crafted to provide a safe, community-centered environment.
        </p>
      </section>
      <section className="text-center mt-8 bg-success dark:bg-neutral p-4">
        <h2 className="text-3xl font-bold">Join Us Today</h2>
        <p className="mt-2 text-2xl italic">
          Start Your Journey to Peace of Mind
        </p>
        <p className="mt-2 text-xl">
          Ready to take control of your mental health journey? Start journaling,
          tracking your moods, and accessing resources today.
        </p>
        <button className="btn btn-outline btn-secondary bg-base-100/50 mt-4 shadow-md shadow-secondary hover:shadow-lg hover:shadow-primary border-2 hover:scale-105 duration-300">
          <Link href="/login" className="font-semibold text-lg">
            Get Started
          </Link>
        </button>
      </section>
      <Footer />
    </div>
  );
}
