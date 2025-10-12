import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Handshake, 
  Users, 
  FileText, 
  TrendingUp, 
  BarChart3,
  Calendar,
  Target,
  Award,
  Image as ImageIcon,
  Video,
  CheckCircle2
} from "lucide-react";

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const projectData = {
    id: "0001.6",
    title: "Program Implementation in Schools",
    status: "Open",
    featured: true,
    raised: 0,
    goal: 41800,
    startDate: "January 5, 2026",
    endDate: "June 29, 2026",
    description: "Roll out the play-based MHPSS activities in the 20 primary schools, integrate them into weekly routines, and ensure the program runs smoothly to benefit the children.",
  };

  const team = [
    { name: "Dr. Sarah Okello", role: "Project Lead", avatar: "SO" },
    { name: "James Mugisha", role: "Field Coordinator", avatar: "JM" },
    { name: "Grace Nambi", role: "Education Specialist", avatar: "GN" },
    { name: "David Otim", role: "Program Officer", avatar: "DO" },
  ];

  const milestones = [
    { title: "Teacher Training Completed", date: "Jan 15, 2026", status: "upcoming" },
    { title: "Materials Distribution", date: "Feb 10, 2026", status: "upcoming" },
    { title: "Program Launch", date: "Mar 1, 2026", status: "upcoming" },
    { title: "Mid-term Assessment", date: "Apr 15, 2026", status: "upcoming" },
    { title: "Final Evaluation", date: "Jun 20, 2026", status: "upcoming" },
  ];

  const percentage = (projectData.raised / projectData.goal) * 100;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-mint/15 text-mint border-2 border-mint hover:bg-mint/25">
              {projectData.status}
            </Badge>
            {projectData.featured && (
              <Badge className="bg-orange/15 text-orange border-2 border-orange hover:bg-orange/25">
                ⭐ Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {projectData.id} {projectData.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Heart size={20} />
              Support Project
            </Button>
            <Button variant="outline" className="gap-2 border-2">
              <Handshake size={20} />
              Partner with Us
            </Button>
            <Button variant="outline" className="gap-2 border-2">
              <Users size={20} />
              Volunteer
            </Button>
            <Button variant="outline" className="gap-2 border-2">
              <FileText size={20} />
              Media Kit
            </Button>
            <Button variant="outline" className="gap-2 border-2">
              <TrendingUp size={20} />
              Results
            </Button>
          </div>
        </div>

        {/* Funding Progress Card */}
        <Card className="mb-8 border-4 border-primary/30 bg-primary/5">
          <CardContent className="p-8">
            <div className="flex justify-between items-baseline mb-4">
              <div className="text-5xl font-bold text-primary">
                ${projectData.raised.toLocaleString()}
              </div>
              <div className="text-2xl text-muted-foreground">
                of ${projectData.goal.toLocaleString()}
              </div>
            </div>
            <Progress value={percentage} className="h-3 mb-4" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-background/80 rounded-2xl p-4 border-2 border-muted">
                <p className="text-sm text-muted-foreground mb-1">START DATE</p>
                <p className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Calendar size={18} />
                  {projectData.startDate}
                </p>
              </div>
              <div className="bg-background/80 rounded-2xl p-4 border-2 border-muted">
                <p className="text-sm text-muted-foreground mb-1">END DATE</p>
                <p className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Calendar size={18} />
                  {projectData.endDate}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start mb-8 h-auto flex-wrap bg-muted/50 p-2 gap-2">
            <TabsTrigger value="overview" className="gap-2 data-[state=active]:bg-mint data-[state=active]:text-background">
              <BarChart3 size={18} />
              Overview
            </TabsTrigger>
            <TabsTrigger value="team" className="gap-2 data-[state=active]:bg-purple data-[state=active]:text-background">
              <Users size={18} />
              Team
            </TabsTrigger>
            <TabsTrigger value="media" className="gap-2 data-[state=active]:bg-orange data-[state=active]:text-background">
              <ImageIcon size={18} />
              Media
            </TabsTrigger>
            <TabsTrigger value="milestones" className="gap-2 data-[state=active]:bg-secondary data-[state=active]:text-background">
              <Target size={18} />
              Milestones
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="animate-fade-in">
            <Card className="border-4 border-mint/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <BarChart3 className="text-mint" size={32} />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {projectData.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-mint/10 rounded-2xl p-6 border-2 border-mint/30">
                    <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center mb-4">
                      <Users className="text-mint" size={24} />
                    </div>
                    <h4 className="font-bold text-xl mb-2">20 Schools</h4>
                    <p className="text-muted-foreground">Primary schools across Northern Uganda</p>
                  </div>
                  
                  <div className="bg-purple/10 rounded-2xl p-6 border-2 border-purple/30">
                    <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4">
                      <Award className="text-purple" size={24} />
                    </div>
                    <h4 className="font-bold text-xl mb-2">MHPSS Program</h4>
                    <p className="text-muted-foreground">Mental health & psychosocial support</p>
                  </div>
                  
                  <div className="bg-orange/10 rounded-2xl p-6 border-2 border-orange/30">
                    <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-4">
                      <Target className="text-orange" size={24} />
                    </div>
                    <h4 className="font-bold text-xl mb-2">6 Months</h4>
                    <p className="text-muted-foreground">Implementation timeline</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="animate-fade-in">
            <Card className="border-4 border-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Users className="text-purple" size={32} />
                  Project Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {team.map((member, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-purple/5 p-6 rounded-2xl border-2 border-purple/20 hover:border-purple/40 transition-all hover:scale-105"
                    >
                      <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center text-purple font-bold text-xl border-2 border-purple/30">
                        {member.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-foreground">{member.name}</h4>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Tab */}
          <TabsContent value="media" className="animate-fade-in">
            <Card className="border-4 border-orange/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <ImageIcon className="text-orange" size={32} />
                  Photos & Videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Photos Section */}
                  <div className="bg-orange/5 rounded-2xl p-8 border-2 border-orange/20 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-orange/15 flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="text-orange" size={40} />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Project Photos</h4>
                    <p className="text-muted-foreground mb-4">Gallery of program activities and impact</p>
                    <Button variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-background">
                      View Gallery
                    </Button>
                  </div>

                  {/* Videos Section */}
                  <div className="bg-orange/5 rounded-2xl p-8 border-2 border-orange/20 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-orange/15 flex items-center justify-center mx-auto mb-4">
                      <Video className="text-orange" size={40} />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Project Videos</h4>
                    <p className="text-muted-foreground mb-4">Watch stories from the field</p>
                    <Button variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-background">
                      Watch Videos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Milestones Tab */}
          <TabsContent value="milestones" className="animate-fade-in">
            <Card className="border-4 border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Target className="text-secondary" size={32} />
                  Project Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 bg-secondary/5 p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary/40 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-secondary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-foreground mb-1">{milestone.title}</h4>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Calendar size={16} />
                          {milestone.date}
                        </p>
                      </div>
                      <Badge className="bg-secondary/15 text-secondary border-2 border-secondary/30">
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectDetails;
