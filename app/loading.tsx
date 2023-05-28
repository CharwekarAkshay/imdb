import Image from "next/image";

const Loading = () => {
    return (
        <div className="loading">
            <div className="flex justify-center items-center h-screen w-screen">
                <Image src="/loading.svg" alt="Loading" width="100" height="100"/>
            </div>
        </div>
    );
};

export default Loading;