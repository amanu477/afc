import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function RouteWrapper({ component: Component }: { component: React.ComponentType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-grow flex flex-col"
    >
      <Component />
    </motion.div>
  );
}

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <>
      <Navigation />
      <main className="flex-grow flex flex-col relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/" component={() => <RouteWrapper component={Home} />} />
            <Route path="/about" component={() => <RouteWrapper component={AboutUs} />} />
            <Route path="/products" component={() => <RouteWrapper component={Products} />} />
            <Route path="/products/:id" component={() => <RouteWrapper component={ProductDetail} />} />
            <Route path="/contact" component={() => <RouteWrapper component={ContactUs} />} />
            <Route component={() => <RouteWrapper component={NotFound} />} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-screen bg-grain">
            <AnimatedRoutes />
          </div>
          <Toaster />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
