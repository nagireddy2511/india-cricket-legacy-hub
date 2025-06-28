
import { useState } from "react";
import { Search, Filter, Star, Trophy, Users, Calendar, Instagram, X, Copyright } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PlayerCard from "@/components/PlayerCard";
import PhotoGallery from "@/components/PhotoGallery";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { players } from "@/data/players";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEra = selectedEra === "all" || player.era === selectedEra;
    const matchesFormat = selectedFormat === "all" || player.formats.includes(selectedFormat);
    
    return matchesSearch && matchesEra && matchesFormat;
  });

  const featuredPlayers = players.filter(player => player.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      
      <StatsSection />

      {/* Cricket Heritage Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96" 
            alt="Cricket stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Cricket Heritage</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            From the dusty maidans to world-class stadiums, Indian cricket has evolved into a global phenomenon
          </p>
        </div>
      </section>

      {/* Featured Legends Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-100 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Cricket Legends</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating the heroes who made Indian cricket the powerhouse it is today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Cricket Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-green-100 relative">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e" 
            alt="Cricket action"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-green-800 mb-4">The Spirit of Cricket</h2>
            <p className="text-lg text-gray-700 mb-6">
              Every match tells a story, every player writes history. Experience the passion, 
              dedication, and excellence that defines Indian cricket.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Trophy className="h-12 w-12 mx-auto mb-3 text-orange-500" />
                <h3 className="text-xl font-bold text-green-800">World Champions</h3>
                <p className="text-gray-600">Multiple World Cup victories</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 mx-auto mb-3 text-orange-500" />
                <h3 className="text-xl font-bold text-green-800">Global Stars</h3>
                <p className="text-gray-600">Players loved worldwide</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-3 text-orange-500" />
                <h3 className="text-xl font-bold text-green-800">Billion Fans</h3>
                <p className="text-gray-600">Uniting a nation through sport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Players Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">All Indian Cricket Players</h2>
            <p className="text-lg text-gray-600">
              From 1950 to 2025 - Every player who represented India
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search players by name or speciality..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedEra} onValueChange={setSelectedEra}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Era" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Eras</SelectItem>
                <SelectItem value="1950s-1960s">1950s-1960s</SelectItem>
                <SelectItem value="1970s-1980s">1970s-1980s</SelectItem>
                <SelectItem value="1990s-2000s">1990s-2000s</SelectItem>
                <SelectItem value="2010s-2020s">2010s-Present</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedFormat} onValueChange={setSelectedFormat}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="Test">Test</SelectItem>
                <SelectItem value="ODI">ODI</SelectItem>
                <SelectItem value="T20">T20</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No players found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <PhotoGallery />

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.instagram.com/nagireddy_25_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/NagireddyNR25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center justify-center gap-2 text-green-200">
                <Copyright className="h-4 w-4" />
                <span>2024 Indian Cricket Legends Hub. All rights reserved.</span>
              </div>
              <p className="mt-2 text-sm text-green-300">
                Celebrating the legacy of Indian cricket and its legendary players
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
