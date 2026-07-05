import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-midnight dark:text-midnight-text">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
