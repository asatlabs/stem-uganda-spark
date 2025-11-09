import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ChildWell360 from "./pages/ChildWell360";
import ChildWell360Login from "./pages/ChildWell360Login";
import ChildWell360Dashboard from "./pages/ChildWell360Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/childwell360" element={<ChildWell360 />} />
          <Route path="/childwell360/login/:role" element={<ChildWell360Login />} />
          <Route path="/childwell360/dashboard/:role" element={<ChildWell360Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
