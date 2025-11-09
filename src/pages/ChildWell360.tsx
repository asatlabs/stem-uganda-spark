import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ChildWell360 = () => {
  const userRoles = [
    {
      title: "School Personnel",
      description: "For teachers and welfare officers to report and monitor child welfare cases",
      icon: Users,
      color: "mint",
      link: "/childwell360/login/school"
    },
    {
      title: "Government Officers",
      description: "Ministry of Gender, Labour & Social Development officials",
      icon: Shield,
      color: "purple",
      link: "/childwell360/login/government"
    },
    {
      title: "Counselors",
      description: "Professional counselors providing support to children",
      icon: Heart,
      color: "orange",
      link: "/childwell360/login/counselor"
    },
    {
      title: "Supervisors",
      description: "Program supervisors overseeing child welfare initiatives",
      icon: FileText,
      color: "lavender",
      link: "/childwell360/login/supervisor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            ChildWell<span className="text-primary">360</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive Child Welfare Reporting & Management System
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Empowering schools, government agencies, and support professionals to protect 
            and nurture every child's wellbeing in Northern Uganda.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-card border-border">
              <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Easy Reporting</h3>
              <p className="text-muted-foreground">
                Streamlined reporting system for documenting child welfare concerns and incidents
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-border">
              <div className="w-16 h-16 bg-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Secure Access</h3>
              <p className="text-muted-foreground">
                Role-based access control ensuring confidentiality and data protection
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-border">
              <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Collaborative Care</h3>
              <p className="text-muted-foreground">
                Connect schools, government, and counselors for coordinated support
              </p>
            </Card>
          </div>
        </section>

        {/* Login Portals Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Access Your Portal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {userRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                  <div className={`w-12 h-12 bg-${role.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${role.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{role.description}</p>
                  <Link to={role.link}>
                    <Button variant={role.color as any} className="w-full">
                      Login
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 text-center">
          <Card className="p-8 max-w-3xl mx-auto bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              For technical support or questions about accessing the system, 
              please contact your administrator or reach out to our support team.
            </p>
            <Button variant="secondary" size="lg">
              Contact Support
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default ChildWell360;
