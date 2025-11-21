import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const TeamSection = () => {
  const employees = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Executive Officer",
      department: "Executive Leadership",
      image: "/placeholder.svg",
      initials: "SJ",
      email: "sarah.johnson@asat.org",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      title: "Director of Programs",
      department: "Program Management",
      image: "/placeholder.svg",
      initials: "MC",
      email: "michael.chen@asat.org",
      linkedin: "#"
    },
    {
      name: "Amira Osman",
      title: "Education Coordinator",
      department: "Education & Training",
      image: "/placeholder.svg",
      initials: "AO",
      email: "amira.osman@asat.org",
      linkedin: "#"
    },
    {
      name: "James Williams",
      title: "Finance Manager",
      department: "Finance & Operations",
      image: "/placeholder.svg",
      initials: "JW",
      email: "james.williams@asat.org",
      linkedin: "#"
    },
    {
      name: "Fatima Al-Rashid",
      title: "Community Outreach Lead",
      department: "Community Relations",
      image: "/placeholder.svg",
      initials: "FR",
      email: "fatima.alrashid@asat.org",
      linkedin: "#"
    },
    {
      name: "Robert Martinez",
      title: "Technology Director",
      department: "IT & Innovation",
      image: "/placeholder.svg",
      initials: "RM",
      email: "robert.martinez@asat.org",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals driving ASAT's mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all">
                    <AvatarImage src={employee.image} alt={employee.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {employee.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-semibold mb-1 text-foreground">
                    {employee.name}
                  </h3>
                  
                  <p className="text-sm font-medium text-primary mb-1">
                    {employee.title}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {employee.department}
                  </p>
                  
                  <div className="flex gap-3 mt-2">
                    <a
                      href={`mailto:${employee.email}`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`Email ${employee.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={employee.linkedin}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${employee.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
