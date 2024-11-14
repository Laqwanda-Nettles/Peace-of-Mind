import Article from "@/components/Article";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Resources() {
  return (
    <div>
      <Navbar />
      <h2>Resources</h2>
      <Article
        imgSrc="https://www.apa.org/images/article-traumatic-stress_tcm7-286598.png"
        title="How to cope with traumatic stress"
        tag="stress"
        secondTag="trauma"
        description="Psychologists recommend people lean on loved ones, prioritize self-care, and be patient with themselves to help manage the stressful effects of trauma."
      />
      <Footer />
    </div>
  );
}
