type ProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type { ProductionCompany, ProductionCountry };