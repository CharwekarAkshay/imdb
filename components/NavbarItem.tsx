"use client";
import Link from "next/link";

import {useSearchParams} from "next/navigation";

interface NavbarItemProps {
    title: string;
    params: string;
}

const NavbarItem = (props: NavbarItemProps) => {
    const {title, params} = props;
    const searchParams = useSearchParams();

    const genere = searchParams.get("genre");

    const getActiveClass = (): string => {
        if (genere && genere === params) {
            return "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg text-amber-600";
        }
        return "";
    };

    return (
        <div className="">
            <Link href={`/?genre=${params}`}
                  className={`hover:text-amber-600 font-semibold p-2 ${getActiveClass()}`}>
                {title}
            </Link>
        </div>
    );
};

export default NavbarItem;