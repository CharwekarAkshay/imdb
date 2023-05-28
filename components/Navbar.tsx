import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
    return (
        <div className="flex justify-center gap-4 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
            <NavbarItem title="Trending" params = "fetchTrending"/>
            <NavbarItem title="Top Rated" params = "fetchTopRated"/>
        </div>
    );
};

export default Navbar;