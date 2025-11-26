import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectDetails from "@/components/ProjectDetails";
import LiveImpact from "@/components/LiveImpact";
import SchoolsMap from "@/components/SchoolsMap";
import MissionVision from "@/components/MissionVision";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectDetails />
      <LiveImpact />
      <SchoolsMap />
      <MissionVision />
      <CallToAction />
    </div>
  );
};

export default Index;
