import Movie from "@/app/models/Movie";
import Results from "@/components/Results";

interface SearchPageProps {
    params: { searchTerm: string }
}

const API_KEY = process.env.API_KEY;

const getSearchedMovieList = async (searchTerm: string): Promise<Movie[]> => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`);
    if (!res.ok)
        throw new Error("Error fetching movies");
    const data = await res.json();
    return data.results;
};

const SearchPage = async (props: SearchPageProps) => {
    const {searchTerm} = props.params;

    const movies = await getSearchedMovieList(searchTerm);

    return (
        <div>
            {
                movies.length > 0 ? <Results movies={movies}/> :
                    <h1 className="text-red-300 flex w-full justify-center items-center">No movies found</h1>
            }
        </div>
    );
}

export default SearchPage;