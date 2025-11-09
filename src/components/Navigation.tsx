import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { label: "About Us", variant: "mint" as const, link: "/" },
    { label: "Programs", variant: "purple" as const, link: "/" },
    { label: "Platforms & Resources", variant: "secondary" as const, link: "/" },
    { label: "Impact", variant: "lavender" as const, link: "/" },
    { label: "Get Involved", variant: "orange" as const, link: "/" },
    { label: "Job Board", variant: "lavender" as const, link: "/" },
    { label: "ChildWell360", variant: "orange" as const, link: "/childwell360" },
    { label: "Policies", variant: "lavender" as const, link: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full">
            <Rocket className="w-6 h-6 text-secondary-foreground" />
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-3 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <Button
                variant={item.variant}
                size="nav"
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="lavender"
            size="nav"
            className="font-bold"
          >
            GO
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
