import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const roleConfig = {
  school: {
    title: "School Personnel Login",
    subtitle: "Teachers & Welfare Officers",
    color: "mint"
  },
  government: {
    title: "Government Officer Login",
    subtitle: "Ministry of Gender, Labour & Social Development",
    color: "purple"
  },
  counselor: {
    title: "Counselor Login",
    subtitle: "Professional Child Counseling Services",
    color: "orange"
  },
  supervisor: {
    title: "Supervisor Login",
    subtitle: "Program Oversight & Management",
    color: "lavender"
  }
};

const ChildWell360Login = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const config = roleConfig[role as keyof typeof roleConfig] || roleConfig.school;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login (replace with actual authentication when backend is enabled)
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Welcome to ChildWell360 ${config.subtitle} portal`,
      });
      setIsLoading(false);
      // Navigate to dashboard (to be created)
      navigate(`/childwell360/dashboard/${role}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-card border-border">
        <Link 
          to="/childwell360" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to ChildWell360
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-card-foreground">{config.title}</h1>
          <p className="text-muted-foreground">{config.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-input text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-card-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background border-input text-foreground"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-muted-foreground">
              <input type="checkbox" className="rounded border-input" />
              Remember me
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant={config.color as any}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline font-semibold">
            Contact your administrator
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ChildWell360Login;
