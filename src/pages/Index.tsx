
import { useState } from "react";
import { Search, Filter, Star, Trophy, Users, Calendar } from "lucide-react";
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

      {/* Featured Legends Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
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
    </div>
  );
};

export default Index;
