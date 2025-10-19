import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <style>
        {`
          @keyframes pulse-pink {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes slide-up {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade-in-scale {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pulse-pink {
            animation: pulse-pink 2s infinite ease-in-out;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 1s ease-out forwards;
          }
        `}
      </style>
      <div className="text-center animate-fade-in-scale">
        <h1 className="mb-4 text-6xl md:text-8xl font-extrabold text-pink-500 animate-pulse-pink">404</h1>
        <p className="mb-6 text-xl text-gray-300">Oops! Page not found</p>
        <a href="/">
          <Button className="bg-pink-500 text-black hover:bg-pink-600 px-6 py-3 rounded-md font-semibold transition-colors animate-pulse-pink">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;