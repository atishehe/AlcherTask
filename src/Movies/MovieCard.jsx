
export function MovieCard({movie}) {
  return (
        <div className="flex flex-col gap-2 group justify-between cursor-pointer w-54 rounded-2xl">
            <div className="h-80 w-54 object-contain hover:border-2 hover:border-white hover:rounded-2xl ">
                <img src={movie.poster_path} className="rounded-2xl"/>
            </div>
            <span className="text-white overflow-hidden whitespace-nowrap">{movie.original_title}</span>
            <span className="text-gray-400 font-semibold text-sm">{movie.release_date.slice(-4)}</span>
        </div>
  );
}