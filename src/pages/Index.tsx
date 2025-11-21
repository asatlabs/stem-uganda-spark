import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectDetails from "@/components/ProjectDetails";
import LiveImpact from "@/components/LiveImpact";
import MissionVision from "@/components/MissionVision";
import TeamSection from "@/components/TeamSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectDetails />
      <LiveImpact />
      <MissionVision />
      <TeamSection />
      <CallToAction />
    </div>
  );
};

export default Index;
