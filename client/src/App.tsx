import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import LocalActivities from "./pages/LocalActivities";
import Safaris from "./pages/Safaris";
import Accommodations from "./pages/Accommodations";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import BookTour from "./pages/BookTour";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/tours"} component={Tours} />
          <Route path={"/local-activities"} component={LocalActivities} />
          <Route path={"/safaris"} component={Safaris} />
          <Route path={"/accommodations"} component={Accommodations} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/book-tour"} component={BookTour} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
