/* eslint-disable react/display-name */
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`}
                height={1080}
                width={1920}
                alt=''
            />

            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all 
                duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>

            </div>
        </div>
    );
})

export default Thumbnail;