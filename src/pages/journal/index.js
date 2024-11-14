import Footer from "@/components/Footer";
import JournalForm from "@/components/JournalForm";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Journal() {
  return (
    <div>
      <div className="flex items-center w-full justify-between">
        <Sidebar />
        <h2 className="text-4xl font-bold">Journal Dashboard</h2>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <section>
        <JournalForm />
      </section>
      <Footer />
    </div>
  );
}
