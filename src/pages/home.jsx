import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { MovieCard } from "../Movies/MovieCard";

export function Home(){
    const url = "https://jsonfakery.com/movies/paginated"
    const {loading,data,error} = useFetch(url)
    if(data){
        console.log(data);
    }
    else{
        console.log("NO data")
    }
    return(<div className="bg-gradient-to-b from-black to-gray-800 ">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className="py-4 flex flex-row gap-4 flex-wrap justify-center">{data && data.data.map((movie)=>{
                return(<div key ={movie.movie_id}>
                    <Link to="/movie-details" state={{movie}}><MovieCard movie={movie} /></Link>
                </div >)
            })}</div>
            <div className="text-center">
                <span className="font-extrabold text-white text-2xl">THIS IS A FOOTER, (made in 1 day :D)</span>
            </div>
        </div>)
}