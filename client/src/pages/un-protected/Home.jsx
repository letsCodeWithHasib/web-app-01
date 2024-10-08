import Hero from "../../components/un-protected/Hero";
import Benefits from "../../components/un-protected/Benefits";
import CallToAction from "../../components/un-protected/CallToAction";
import Latest from "../../components/un-protected/LatestTest";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Benefits />
      <CallToAction />
    </div>
  );
};

export default Home;
