import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-purple text-primary-foreground">
      <div className="container mx-auto text-center space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Every child deserves access to quality STEM education. Together, we can make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur p-8 rounded-2xl space-y-4 hover:bg-primary-foreground/20 transition-colors">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Donate</h3>
            <p className="text-primary-foreground/80">
              Support our programs and help us reach more students
            </p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur p-8 rounded-2xl space-y-4 hover:bg-primary-foreground/20 transition-colors">
            <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-orange-foreground" />
            </div>
            <h3 className="text-xl font-bold">Volunteer</h3>
            <p className="text-primary-foreground/80">
              Share your skills and mentor the next generation
            </p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur p-8 rounded-2xl space-y-4 hover:bg-primary-foreground/20 transition-colors">
            <div className="w-16 h-16 bg-pink rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-pink-foreground" />
            </div>
            <h3 className="text-xl font-bold">Partner</h3>
            <p className="text-primary-foreground/80">
              Collaborate with us to expand STEM opportunities
            </p>
          </div>
        </div>

        <div className="pt-8">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-12"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
