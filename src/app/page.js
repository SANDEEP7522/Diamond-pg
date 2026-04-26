import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SearchBar from "./components/SearchBar";
import Intro from "./sections/Intro";
import Facilities from "./sections/Facilities";
import WhyChooseUs from "./sections/WhyChooseUs";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
      <Intro />
      <Facilities />
      <WhyChooseUs />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
