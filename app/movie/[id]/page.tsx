import Movie from "@/app/models/Movie";
import Image from "next/image";

interface MoviePageProps {
    params: { id: string };
}

const API_KEY = process.env.API_KEY;


const getMovie = async (id: string): Promise<Movie> => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {next: {revalidate: 1000}});
    return await res.json();
}

const MoviePage = async (props: MoviePageProps) => {
    const {id} = props.params;

    const movie = await getMovie(id);

    return (
        <div className="w-full">
            <div
                className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                       alt={movie.title} width={500}
                       height={300}
                       className="rounded-lg "
                       placeholder="blur"
                       blurDataURL={`/loading.svg`}
                       style={
                           {
                               maxWidth: "100%",
                               height: "100%",
                           }
                       }
                />
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">{movie.original_title || movie.title}</h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">Overview:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Release Date:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;