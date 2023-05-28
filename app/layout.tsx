import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Providers from "@/app/providers/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'IMDB',
    description: 'We are the Internet Movie Database',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Header/>
            <Navbar/>
            <SearchBox/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
