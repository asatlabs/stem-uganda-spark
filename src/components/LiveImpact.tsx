import { Layers, Users, School, Clock, Box, Beaker, Tablet, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LiveImpact = () => {
  const liveStats = [
    {
      icon: Layers,
      value: "0",
      label: "Programs Running This Month",
      description: "Across 5 districts in Northern Uganda",
      color: "mint",
    },
    {
      icon: Users,
      value: "0",
      label: "Children Learning This Month",
      description: "48% girls, 52% boys",
      color: "secondary",
    },
    {
      icon: School,
      value: "0",
      label: "Schools Active Today",
      description: "In underserved communities",
      color: "purple",
    },
    {
      icon: Clock,
      value: "0",
      label: "Hours of Play-Based Learning",
      description: "Delivered this year",
      color: "orange",
    },
  ];

  const resources = [
    { value: "45", label: "Robotics Kits", icon: Box },
    { value: "120", label: "Science Material Sets", icon: Beaker },
    { value: "78", label: "Coding Tablets", icon: Tablet },
    { value: "156", label: "Teacher Trainings", icon: GraduationCap },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Live Impact Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              LIVE: Our Impact Right Now
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Updated in real-time from our field teams across Northern Uganda
          </p>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {liveStats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in bg-background/80 backdrop-blur"
              style={{
                animationDelay: `${index * 100}ms`,
                borderColor: `hsl(var(--${stat.color}))`,
              }}
            >
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `hsl(var(--${stat.color}) / 0.15)` }}
                >
                  <stat.icon
                    size={32}
                    style={{ color: `hsl(var(--${stat.color}))` }}
                  />
                </div>
                <div 
                  className="text-5xl font-bold mb-3"
                  style={{ color: `hsl(var(--${stat.color}))` }}
                >
                  {stat.value}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources Distributed Section */}
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border-4 border-mint/30">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Resources Distributed This Quarter
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="text-center animate-fade-in hover:scale-110 transition-transform duration-300 p-4 rounded-2xl bg-mint/5 border-2 border-mint/20"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-mint/15 flex items-center justify-center">
                    <resource.icon size={28} className="text-mint" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-mint">
                  {resource.value}
                </div>
                <p className="text-sm text-muted-foreground font-semibold">
                  {resource.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveImpact;
