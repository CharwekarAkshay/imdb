import Movie from "@/app/models/Movie";
import Link from "next/link";
import Image from "next/image";
import {HiOutlineThumbUp} from "react-icons/hi";
import results from "@/components/Results";

interface CardProps {
    movie: Movie;
}

const Card = (props: CardProps) => {
    const {movie} = props;
    return (
        <div
            className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${movie.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                       alt={movie.title} width={500}
                       height={300}
                       className="sm:rounded-t-lg sm:rounded-b-none sm:h-64 sm:w-full sm:object-cover sm:object-center group-hover:opacity-80 transition-opacity duration-200"
                       placeholder="blur"
                       blurDataURL={`/loading.svg`}
                       style={
                           {
                               maxWidth: "100%",
                               height: "auto",
                           }
                       }
                />
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{movie.overview}</p>
                    <h2 className="truncate text-lg font-bold">{movie.original_title || movie.title}</h2>
                    <p className="flex justify-between ">
                        {movie.release_date || movie.first_air_date}
                        <p className="flex items-center gap-2.5">
                            <HiOutlineThumbUp/>
                            {movie.vote_count}
                        </p>
                    </p>
                </div>
            </Link>
        </div>
        // <div key={movie.id} className=" flex flex-col justify-center items-center w-1/5 m-4">
        // <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
        // <h1 className="text-2xl font-bold">{movie.original_title}</h1>
        //</div>
    );
};
export default Card;
