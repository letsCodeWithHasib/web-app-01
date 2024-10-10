import Hero from "../../components/un-protected/Hero";
import Benefits from "../../components/un-protected/Benefits";
import CallToAction from "../../components/un-protected/CallToAction";
import Latest from "../../components/un-protected/LatestTest";
import HomeAboutSection from "../../components/un-protected/HomeAboutSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Benefits />
      <CallToAction />
      <HomeAboutSection />
    </div>
  );
};

export default Home;
