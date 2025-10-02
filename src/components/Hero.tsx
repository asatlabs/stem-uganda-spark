import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-stem.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-mint/20 px-4 py-2 rounded-full">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-foreground">Empowering Young Minds</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Building Uganda's{" "}
              <span className="text-primary">STEM</span>{" "}
              Future
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              We empower young people from underserved schools and disadvantaged communities through 
              high-quality, hands-on STEM programs that inspire learning, build skills, and open 
              pathways to future success.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Get Involved
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Students Reached</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Partner Schools</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Active Programs</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 -z-10" />
            <img
              src={heroImage}
              alt="African children engaged in hands-on STEM learning activities"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange text-orange-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-sm font-semibold">Student Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
