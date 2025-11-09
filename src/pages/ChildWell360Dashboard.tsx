import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  FileText, 
  Users, 
  TrendingUp, 
  AlertCircle,
  Calendar,
  Bell
} from "lucide-react";

const ChildWell360Dashboard = () => {
  const { role } = useParams<{ role: string }>();

  const getDashboardTitle = () => {
    const titles: Record<string, string> = {
      school: "School Personnel Dashboard",
      government: "Government Officer Dashboard",
      counselor: "Counselor Dashboard",
      supervisor: "Supervisor Dashboard"
    };
    return titles[role || "school"] || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {getDashboardTitle()}
            </h1>
            <p className="text-muted-foreground">Welcome to ChildWell360</p>
          </div>
          <Button variant="mint">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 text-mint" />
              <TrendingUp className="w-4 h-4 text-mint" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-1">24</h3>
            <p className="text-sm text-muted-foreground">Active Cases</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple" />
              <TrendingUp className="w-4 h-4 text-purple" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-1">156</h3>
            <p className="text-sm text-muted-foreground">Children Supported</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-4">
              <AlertCircle className="w-8 h-8 text-orange" />
              <TrendingUp className="w-4 h-4 text-orange" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-1">3</h3>
            <p className="text-sm text-muted-foreground">Urgent Cases</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-lavender" />
              <TrendingUp className="w-4 h-4 text-lavender" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-1">12</h3>
            <p className="text-sm text-muted-foreground">Appointments This Week</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">Recent Reports</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-mint/20 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Case #{1000 + i}</p>
                      <p className="text-sm text-muted-foreground">Submitted 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
            <Button variant="mint" className="w-full mt-6">
              View All Reports
            </Button>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">Quick Actions</h2>
            <div className="space-y-4">
              <Button variant="purple" className="w-full justify-start" size="lg">
                <FileText className="w-5 h-5 mr-3" />
                Submit New Report
              </Button>
              <Button variant="orange" className="w-full justify-start" size="lg">
                <Users className="w-5 h-5 mr-3" />
                View Children List
              </Button>
              <Button variant="lavender" className="w-full justify-start" size="lg">
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Appointment
              </Button>
              <Button variant="secondary" className="w-full justify-start" size="lg">
                <Bell className="w-5 h-5 mr-3" />
                View Notifications
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ChildWell360Dashboard;
