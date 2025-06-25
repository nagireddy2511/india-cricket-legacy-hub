
import { TrendingUp, Award, Globe, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "1952",
      label: "First Test Match",
      description: "India's cricket journey began"
    },
    {
      icon: Award,
      value: "2",
      label: "World Cup Wins",
      description: "1983 & 2011 champions"
    },
    {
      icon: TrendingUp,
      value: "#1",
      label: "Test Rankings",
      description: "Reached pinnacle of cricket"
    },
    {
      icon: Globe,
      value: "3",
      label: "Formats Mastered",
      description: "Test, ODI & T20 excellence"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Indian Cricket Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to world champions - A legacy of excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-green-800 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
