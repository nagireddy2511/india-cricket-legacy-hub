
import { Trophy, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full border-4 border-orange-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border-2 border-white"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Indian Cricket
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-orange-300">
            Legends Hub
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Celebrating 75+ years of Indian cricket excellence - From legends of the past to stars of today
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Users className="h-12 w-12 mx-auto mb-3 text-orange-300" />
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-green-100">Players Featured</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Trophy className="h-12 w-12 mx-auto mb-3 text-orange-300" />
            <div className="text-3xl font-bold mb-2">75+</div>
            <div className="text-green-100">Years of Cricket</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Star className="h-12 w-12 mx-auto mb-3 text-orange-300" />
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-green-100">Cricket Formats</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('players-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Legends
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200"
            onClick={() => document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
