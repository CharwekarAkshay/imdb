"use client";
import {ReactElement} from "react";
import {ThemeProvider} from "next-themes";

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers = ({children}: ProvidersProps): ReactElement => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div
                className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition duration-300 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    );
};

export default Providers;