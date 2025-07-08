import { useLocation } from "react-router-dom";
import { Play, Bookmark, Share2, Clock, Star } from "lucide-react";

export function MovieDetailsCard() {
  const loc = useLocation();
  const movie = loc?.state;

  if (!movie) {
    return <div className="text-white">Movie not found</div>;
  }

  // Extract year from release date
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  
  // Format runtime (assuming it's in minutes)
  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Get director from cast (if available)
  const director = movie.casts?.find(cast => cast.job === 'Director')?.name || 'Unknown';

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop_path} 
          alt={movie.original_title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 pt-32">
        {/* Movie Poster */}
        <div className="flex-shrink-0">
          <img 
            src={movie.poster_path}
            alt={movie.original_title}
            className="w-80 h-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{movie.original_title}</h1>
          
          <div className="text-gray-300 mb-6">
            <span>Directed by {director}</span>
          </div>

          {/* Movie Details */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="bg-gray-600 px-2 py-1 rounded">R</span>
            <span>{releaseYear}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatRuntime(120)} {/* Default runtime, adjust as needed */}
            </span>
            <span>Comedy, Romance, and more</span>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                {movie.vote_average}
              </div>
              <Star className="w-4 h-4 text-green-500" />
              <span className="text-green-500">{Math.round(movie.vote_average * 10)}%</span>
              <span className="text-green-500">{Math.round(movie.popularity)}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5" />
              Watch Free
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Overview */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {movie.overview}
          </p>
        </div>
      </div>

      {/* Cast & Crew Section */}
      <div className="relative z-10 px-8 pb-8">
        <h2 className="text-3xl font-bold mb-6">Cast & Crew</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {movie.casts?.slice(0, 10).map((cast, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-2 overflow-hidden">
                {cast.profile_path ? (
                  <img 
                    src={cast.profile_path} 
                    alt={cast.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {cast.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-sm">
                <div className="font-semibold">{cast.name}</div>
                <div className="text-gray-400">{cast.character}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}