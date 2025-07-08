import { useLocation } from "react-router-dom";
import { Play, Bookmark, Share2, Clock, Star } from "lucide-react";

export function MovieDetailsCard() {
  const {state} = useLocation();
  const movie = state?.movie

  if (!movie) {
    return <div className="text-white">Movie not found</div>;
  }

  const releaseYear = movie.release_date.slice(-4);
  
  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const director = movie.casts?.find(cast => cast.job === 'Director')?.name || 'Unknown';

  return (
    <div className="relative min-h-screen bg-gray-900 text-white mb-100">
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop_path} 
          alt={movie.original_title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 pt-32"><div className="flex-shrink-0">
          <img 
            src={movie.poster_path}
            alt={movie.original_title}
            className="w-80 h-auto rounded-lg shadow-2xl"
          />
        </div><div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{movie.original_title}</h1>
          <div className="text-gray-300 mb-6">
            <span>Directed by {director}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="bg-gray-600 px-2 py-1 rounded">R</span>
            <span>{releaseYear}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatRuntime(120)}
            </span>
            <span>Comedy, Romance, and more</span>
          </div>
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
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {movie.overview}
          </p>
        </div>
      </div>
      <div className="relative z-10 px-8 pb-8">
        <h2 className="text-3xl font-bold mb-6">Cast & Crew</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {movie.casts?.map((cast, index) => (
            <div key={cast.id} className="flex-shrink-0 text-center">
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
                <div className="font-semibold">{cast.original_name}</div>
                <div className="text-gray-400">{cast.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}