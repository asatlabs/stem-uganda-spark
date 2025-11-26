import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { MapPin, Users, BookOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const schools = [
  {
    id: 1,
    name: "Kampala Primary School",
    position: { lat: 0.3476, lng: 32.5825 },
    students: 450,
    programs: 5,
    impact: "High",
    address: "Kampala, Uganda"
  },
  {
    id: 2,
    name: "Entebbe STEM Academy",
    position: { lat: 0.0514, lng: 32.4435 },
    students: 320,
    programs: 4,
    impact: "High",
    address: "Entebbe, Uganda"
  },
  {
    id: 3,
    name: "Jinja Science School",
    position: { lat: 0.4244, lng: 33.2041 },
    students: 280,
    programs: 3,
    impact: "Medium",
    address: "Jinja, Uganda"
  },
  {
    id: 4,
    name: "Mbarara Tech Institute",
    position: { lat: -0.6103, lng: 30.6500 },
    students: 390,
    programs: 6,
    impact: "High",
    address: "Mbarara, Uganda"
  },
  {
    id: 5,
    name: "Gulu Innovation Hub",
    position: { lat: 2.7747, lng: 32.2989 },
    students: 210,
    programs: 3,
    impact: "Medium",
    address: "Gulu, Uganda"
  }
];

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "1.5rem"
};

const center = {
  lat: 0.3476,
  lng: 32.5825
};

const SchoolsMap = () => {
  const [selectedSchool, setSelectedSchool] = useState<typeof schools[0] | null>(null);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
  });

  if (loadError) {
    return (
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Schools We <span className="text-primary">Serve</span>
            </h2>
            <Card className="p-8 max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                To view the interactive map, please add your Google Maps API key.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {schools.map((school) => (
                  <div key={school.id} className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-foreground mb-2">{school.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{school.address}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {school.students}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {school.programs} programs
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (!isLoaded) {
    return (
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-64 mx-auto mb-4" />
            <div className="h-[600px] bg-muted rounded-3xl" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Our Reach</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Schools We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the schools across Uganda where we're making a difference through 
            innovative STEM education programs.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={7}
            options={{
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry",
                  stylers: [{ color: "#f5f5f5" }]
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#c9e7f8" }]
                }
              ],
              disableDefaultUI: false,
              zoomControl: true
            }}
          >
            {schools.map((school) => (
              <Marker
                key={school.id}
                position={school.position}
                onClick={() => setSelectedSchool(school)}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 12,
                  fillColor: "#0EA5E9",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 3
                }}
              />
            ))}

            {selectedSchool && (
              <InfoWindow
                position={selectedSchool.position}
                onCloseClick={() => setSelectedSchool(null)}
              >
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {selectedSchool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedSchool.address}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-foreground">
                        <strong>{selectedSchool.students}</strong> students
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      <span className="text-foreground">
                        <strong>{selectedSchool.programs}</strong> active programs
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-foreground">
                        <strong>{selectedSchool.impact}</strong> impact level
                      </span>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{schools.length}</div>
              <div className="text-sm text-muted-foreground">Partner Schools</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">
                {schools.reduce((sum, school) => sum + school.students, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">
                {schools.reduce((sum, school) => sum + school.programs, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Active Programs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange">100%</div>
              <div className="text-sm text-muted-foreground">Coverage Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsMap;
