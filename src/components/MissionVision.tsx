import { Card } from "@/components/ui/card";
import { Target, Eye, Sparkles } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Purpose</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Driven by{" "}
            <span className="text-primary">Purpose</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 space-y-6 border-2 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We empower young people from underserved schools and disadvantaged communities 
              through high-quality, hands-on STEM programs that inspire learning, build skills, 
              and open pathways to future success as leaders and professionals.
            </p>
          </Card>

          <Card className="p-8 space-y-6 border-2 hover:border-secondary/50 transition-colors bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Uganda where all young people have access to world-class STEM education and 
              career opportunities, creating a generation of innovators, problem-solvers, and 
              leaders who will shape the future.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
