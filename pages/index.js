import Header from "../components/header";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Header />

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Outstanding Services"
        title="Why Choose Anicca Research?">
        Our experts have decades of combined experience in development and tech consultation.
        We use the latest tools, techniques, and best practices to bring your vision to life.
        Our solutions are tailored to fit your unique business goals and challenges.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;