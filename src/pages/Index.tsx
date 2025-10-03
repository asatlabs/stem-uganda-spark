import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LiveImpact from "@/components/LiveImpact";
import MissionVision from "@/components/MissionVision";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LiveImpact />
      <MissionVision />
      <CallToAction />
    </div>
  );
};

export default Index;
