import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Blog from "@/components/Blog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Team />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
