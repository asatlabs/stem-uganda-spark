import { MapPin, Phone, Mail, Calendar, Users, Heart, BookOpen, Smile } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SchoolProfile = () => {
  const activities = [
    {
      title: "Play-Based Learning",
      description: "Structured play sessions that promote emotional expression and social skills development through interactive games and creative activities.",
      icon: Smile,
      color: "mint",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
    },
    {
      title: "Art Therapy Workshops",
      description: "Creative expression through art, music, and drama to help children process emotions and build resilience in a safe environment.",
      icon: Heart,
      color: "purple",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&auto=format&fit=crop"
    },
    {
      title: "Group Counseling",
      description: "Facilitated peer support groups where children share experiences, build connections, and develop coping strategies together.",
      icon: Users,
      color: "orange",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&auto=format&fit=crop"
    },
    {
      title: "Educational Support",
      description: "Tailored learning support programs that address educational gaps while considering each child's emotional and mental health needs.",
      icon: BookOpen,
      color: "mint",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop"
    }
  ];

  const projectTimeline = [
    {
      date: "January 2024",
      title: "Program Launch",
      description: "Initiated MHPSS activities with 120 students across 5 grades",
      status: "completed"
    },
    {
      date: "March 2024",
      title: "Teacher Training",
      description: "Conducted comprehensive training for 15 teachers on trauma-informed practices",
      status: "completed"
    },
    {
      date: "May 2024",
      title: "Parent Engagement",
      description: "Launched monthly parent workshops on supporting children's mental health",
      status: "ongoing"
    },
    {
      date: "July 2024",
      title: "Community Partnerships",
      description: "Established partnerships with local mental health professionals",
      status: "ongoing"
    }
  ];

  const stats = [
    { label: "Students Enrolled", value: "320", change: "+45 this month" },
    { label: "Activities Completed", value: "156", change: "+12 this week" },
    { label: "Teachers Trained", value: "24", change: "100% certified" },
    { label: "Parent Engagement", value: "89%", change: "+15% increase" }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851905-4bca7197c834?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&auto=format&fit=crop" 
          alt="School building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-background/20 text-primary-foreground border-primary-foreground/30">
              MHPSS Partner School
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Sunrise Elementary School
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Building resilient futures through play-based mental health support
            </p>
            <div className="flex items-center justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>320 Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Est. 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Thriving Through Play
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Sunrise Elementary School has been at the forefront of integrating Mental Health and 
                Psychosocial Support (MHPSS) into our educational framework. Through the Thriving Thru 
                Play approach, we create safe spaces where children can heal, grow, and thrive.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Our holistic approach combines play-based learning with structured mental health support, 
                ensuring every child receives the care and attention they deserve while pursuing academic excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Trauma-Informed</div>
                    <div className="text-sm text-muted-foreground">Evidence-based practices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Community-Centered</div>
                    <div className="text-sm text-muted-foreground">Inclusive approach</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop" 
                alt="Children playing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MHPSS Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Approach</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              MHPSS Activities & Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive mental health and psychosocial support through engaging, 
              child-centered activities designed to promote healing and resilience.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="play">Play-Based</TabsTrigger>
              <TabsTrigger value="therapy">Therapeutic</TabsTrigger>
              <TabsTrigger value="education">Educational</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{activity.title}</CardTitle>
                        <CardDescription>{activity.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="play">
              <Card>
                <CardHeader>
                  <CardTitle>Play-Based Learning Programs</CardTitle>
                  <CardDescription>Interactive activities that promote emotional and social development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Structured play sessions focusing on creative expression, team building, and emotional regulation through games and activities.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="therapy">
              <Card>
                <CardHeader>
                  <CardTitle>Therapeutic Support Programs</CardTitle>
                  <CardDescription>Professional counseling and art therapy services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">One-on-one and group therapy sessions using evidence-based approaches to support children's mental health and emotional wellbeing.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Support Programs</CardTitle>
                  <CardDescription>Academic assistance integrated with mental health support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tailored learning programs that address educational needs while maintaining focus on each child's emotional and psychological wellbeing.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Gallery</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Moments of Joy & Growth
            </h2>
            <p className="text-muted-foreground text-lg">
              Capturing the smiles, creativity, and resilience of our students
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {gallery.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Project Timeline
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our MHPSS program implementation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
            <div className="space-y-12">
              {projectTimeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">School Address</div>
                    <div className="text-muted-foreground">
                      123 Education Street<br />
                      Kampala Central, Kampala<br />
                      Uganda, P.O. Box 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <div className="text-muted-foreground">+256 700 123 456</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">info@sunriseelementary.edu</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.28196361095!2d32.52244!3d0.31766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9b0b4f3f%3A0x3f0b0b0b0b0b0b0b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolProfile;