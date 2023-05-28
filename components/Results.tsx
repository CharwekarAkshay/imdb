import Movie from "@/app/models/Movie";
import Card from "@/components/Card";

interface ResultsProps {
    movies: Movie[];
}

const Results = (props: ResultsProps) => {
    const {movies} = props;

    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {movies.map((movie: Movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    );
}

export default Results;