'use client';

import {useEffect} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = (props: ErrorProps) => {
    const {error, reset} = props;
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-semibold text-gray-800">Something went wrong</h1>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-lg mt-4" onClick={reset}>Try again</button>
        </div>
    );
};

export default Error;