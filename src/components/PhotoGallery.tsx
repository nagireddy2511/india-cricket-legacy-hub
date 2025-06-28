
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "1983 World Cup Victory",
      category: "historic",
      year: "1983",
      location: "Lord's, London",
      description: "Kapil Dev lifting the trophy that changed Indian cricket forever",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
    },
    {
      id: 2,
      title: "2011 Cricket World Cup Victory",
      category: "historic",
      year: "2011",
      location: "Mumbai, India",
      description: "MS Dhoni's iconic six that brought the World Cup home after 28 years",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      id: 3,
      title: "2020-21 Border-Gavaskar Trophy Victory in Australia",
      category: "historic",
      year: "2021",
      location: "Australia",
      description: "Historic series win in Australia despite injuries and setbacks",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
    },
    {
      id: 4,
      title: "2024 T20 World Cup Victory",
      category: "historic",
      year: "2024",
      location: "Barbados",
      description: "India's second T20 World Cup triumph after 17 years",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      id: 5,
      title: "Yuvraj Singh's Six Sixes in an Over (2007)",
      category: "action",
      year: "2007",
      location: "Durban, South Africa",
      description: "Yuvraj Singh's legendary six sixes in one over against England",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
    },
    {
      id: 6,
      title: "Sachin Tendulkar's 100th International Century (2012)",
      category: "action",
      year: "2012",
      location: "Dhaka, Bangladesh",
      description: "The Master Blaster's historic 100th international century",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      id: 7,
      title: "Cricket Stadium Atmosphere",
      category: "stadiums",
      year: "2023",
      location: "Various Stadiums",
      description: "The electric atmosphere of Indian cricket grounds",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      id: 8,
      title: "Modern Cricket Action",
      category: "action",
      year: "2024",
      location: "International Matches",
      description: "Contemporary cricket showcasing skill and athleticism",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
    },
    {
      id: 9,
      title: "Cricket Equipment Evolution",
      category: "equipment",
      year: "1950-2024",
      location: "Through the Years",
      description: "From wooden bats to modern gear - cricket's evolution",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    },
    {
      id: 10,
      title: "Team India Celebrations",
      category: "celebrations",
      year: "2011",
      location: "Mumbai, India",
      description: "World Cup victory celebrations across the nation",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
    },
    {
      id: 11,
      title: "Cricket Training Grounds",
      category: "training",
      year: "2023",
      location: "NCA, Bangalore",
      description: "Where champions are made - training facilities",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", count: galleryItems.length },
    { id: "historic", label: "Historic Moments", count: galleryItems.filter(item => item.category === "historic").length },
    { id: "action", label: "Action Shots", count: galleryItems.filter(item => item.category === "action").length },
    { id: "stadiums", label: "Stadiums", count: galleryItems.filter(item => item.category === "stadiums").length },
    { id: "celebrations", label: "Celebrations", count: galleryItems.filter(item => item.category === "celebrations").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: typeof galleryItems[0]) => {
    const searchQuery = `${item.title} ${item.year} cricket`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <section id="gallery-section" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Cricket Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the greatest moments in Indian cricket history through our curated collection
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-green-700 hover:bg-green-50 shadow-md hover:shadow-lg"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                </div>

                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors flex items-center gap-2">
                  {item.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600">No photos found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
