
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Calendar, ExternalLink } from "lucide-react";
import { Instagram, X } from "lucide-react";

interface Player {
  id: number;
  name: string;
  era: string;
  formats: string[];
  speciality: string;
  achievement: string;
  featured?: boolean;
  socialMedia?: {
    twitter?: string;
    instagram?: string;
  };
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const handleNameClick = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(player.name + ' cricket biography')}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
      <div className="relative">
        {/* Cricket Field Image - Same for all players */}
        <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Cricket elements */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-1 bg-amber-400 rounded transform rotate-45"></div>
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute top-4 right-4">
            <div className="w-12 h-2 bg-white rounded-full opacity-80"></div>
          </div>

          {player.featured && (
            <div className="absolute top-4 left-4">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 
                className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors cursor-pointer hover:underline flex items-center gap-2"
                onClick={handleNameClick}
              >
                {player.name}
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {player.era}
              </p>
            </div>

            {/* Social Media Links */}
            {player.socialMedia && (
              <div className="flex gap-3">
                {player.socialMedia.twitter && (
                  <a
                    href={player.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    title="Follow on X (Twitter)"
                  >
                    <X className="h-5 w-5" />
                  </a>
                )}
                {player.socialMedia.instagram && (
                  <a
                    href={player.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                    title="Follow on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {player.formats.map((format) => (
                <Badge 
                  key={format} 
                  variant="secondary" 
                  className="bg-green-100 text-green-800 hover:bg-green-200"
                >
                  {format}
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Speciality:</p>
              <p className="text-sm text-gray-600">{player.speciality}</p>
            </div>

            <div className="flex items-start gap-2">
              <Trophy className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">{player.achievement}</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PlayerCard;
