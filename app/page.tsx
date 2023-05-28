import Movie from "@/app/models/Movie";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface HomeProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const Home = async (props: HomeProps) => {
    const {searchParams} = props;
    const genre = searchParams['genre'] || "fetchTrending";
    const genreName = (genre && genre === "fetchTrending") ? "trending/all/week" : "movie/top_rated";
    const res = await fetch(`https://api.themoviedb.org/3/${genreName}?api_key=${API_KEY}&language=en-US&page=1`, {next: {revalidate: 1000}});

    if (!res.ok) {
        // Not able to fetch movies from API
        throw new Error("Something went wrong");
    }

    const data = await res.json();

    const movies: Movie[] = data.results;


    return (
        <h1 className="text-red-300">
            <Results movies={movies}/>
        </h1>
    )
}

export default Home;
