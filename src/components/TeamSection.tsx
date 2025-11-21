import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const TeamSection = () => {
  const employees = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "Leading ASAT with 15+ years of experience in international development and humanitarian work across Africa and the Middle East.",
      image: "/placeholder.svg",
      initials: "SJ",
      email: "sarah.johnson@asat.org",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      title: "Director of Programs",
      department: "Program Management",
      bio: "Oversees all ASAT programs with expertise in project management, community engagement, and sustainable development initiatives.",
      image: "/placeholder.svg",
      initials: "MC",
      email: "michael.chen@asat.org",
      linkedin: "#"
    },
    {
      name: "Amira Osman",
      title: "Education Coordinator",
      department: "Education & Training",
      bio: "Designs and implements educational programs with a focus on STEM education and capacity building for underserved communities.",
      image: "/placeholder.svg",
      initials: "AO",
      email: "amira.osman@asat.org",
      linkedin: "#"
    },
    {
      name: "James Williams",
      title: "Finance Manager",
      department: "Finance & Operations",
      bio: "Manages financial operations and ensures transparency in resource allocation with a background in non-profit financial management.",
      image: "/placeholder.svg",
      initials: "JW",
      email: "james.williams@asat.org",
      linkedin: "#"
    },
    {
      name: "Fatima Al-Rashid",
      title: "Community Outreach Lead",
      department: "Community Relations",
      bio: "Builds and maintains partnerships with local communities, ensuring culturally sensitive and impactful program delivery.",
      image: "/placeholder.svg",
      initials: "FR",
      email: "fatima.alrashid@asat.org",
      linkedin: "#"
    },
    {
      name: "Robert Martinez",
      title: "Technology Director",
      department: "IT & Innovation",
      bio: "Drives technological innovation and digital transformation to enhance program efficiency and expand ASAT's reach.",
      image: "/placeholder.svg",
      initials: "RM",
      email: "robert.martinez@asat.org",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Meet the People Behind ASAT
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of dedicated professionals brings together decades of experience in international development, 
            education, technology, and community engagement to create lasting impact across Africa and the Middle East.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-6 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-105">
                    <AvatarImage src={employee.image} alt={employee.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-2xl font-bold">
                      {employee.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {employee.name}
                  </h3>
                  
                  <p className="text-base font-semibold text-primary mb-2">
                    {employee.title}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {employee.department}
                  </p>
                  
                  <div className="w-12 h-1 bg-primary/20 rounded-full mb-4"></div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {employee.bio}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={`mailto:${employee.email}`}
                      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={`Email ${employee.name}`}
                      title={employee.email}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={employee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={`${employee.name}'s LinkedIn profile`}
                      title="View LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who share our vision of empowering communities through education and sustainable development.
          </p>
          <a
            href="mailto:careers@asat.org"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform"
          >
            <Mail className="h-5 w-5" />
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
