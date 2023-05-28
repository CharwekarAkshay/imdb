import Collection from "@/app/models/Collection";
import Genre from "@/app/models/Genre";
import {ProductionCompany, ProductionCountry} from "@/app/models/Production";
import SpokenLanguage from "@/app/models/SpokenLanguage";

type Movie = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
};

export default Movie;