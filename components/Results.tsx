import Movie from "@/app/models/Movie";

interface ResultsProps {
    movies: Movie[];
}

const Results = (props: ResultsProps) => {
    const {movies} = props;

    return (
        <div className="flex flex-wrap justify-center">
            {movies.map((movie: Movie) => (
                <div key={movie.id} className="flex flex-col justify-center items-center w-1/5 m-4">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
                    <h1 className="text-2xl font-bold">{movie.original_title}</h1>
                </div>
            ))}
        </div>
    );
}

export default Results;