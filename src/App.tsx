import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route 
                  path="/shoes" 
                  element={
                    <CategoryPage 
                      category="shoes" 
                      title="Shoes Collection" 
                      description="Step into style with our premium footwear selection"
                    />
                  } 
                />
                <Route 
                  path="/clothes" 
                  element={
                    <CategoryPage 
                      category="clothes" 
                      title="Clothing Collection" 
                      description="Discover fashion that defines you"
                    />
                  } 
                />
                <Route 
                  path="/bags" 
                  element={
                    <CategoryPage 
                      category="bags" 
                      title="Bags Collection" 
                      description="Carry your style with elegance"
                    />
                  } 
                />
                <Route 
                  path="/accessories" 
                  element={
                    <CategoryPage 
                      category="accessories" 
                      title="Accessories Collection" 
                      description="Complete your look with perfect details"
                    />
                  } 
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
