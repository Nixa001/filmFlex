import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../services/movieServices'

const Hero = () => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        axios.get(endpoints.popular).then((response) => {
            // console.log(response.data.results);
            const movies = response.data.results
            const randomMovie = movies[getRndInteger(0, 19)]
            console.log(randomMovie);
            setMovie(randomMovie)
        })
    }, [])

    const truncate = (str, length) => {
        if (!str) return ""

        return str.length > length ? str.slice(0, length) + " ..." : str
    };

    if (!movie)
        return (
            <>
                <p>fectching movie...</p>
            </>
        )

    const { title, backdrop_path, release_date, overview } = movie;
    return (
        <div className='w-full h-[500px] lg:h-[850px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[500px] lg:h-[850px] bg-gradient-to-r from-black gradientoright '>
                    <img className='w-full h-full object-cover object-top'
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt={title} />
                    <div className='absolute w-full h-[100%] top-[48%]  lg:top-[70%] p-3 md:p-10 bg-black bg-opacity-30'>
                        <h1 className='text-3xl md:text-4xl font-netflix-regular'>{title}</h1>
                        <div className='mt-5 mb-4'>
                            <button className='capitalize border border-white bg-orange-500 py-2 px-5 hover:bg-gray-600 rounded'>play</button>
                            <button className='capitalize border border-white bg-black py-2 px-5 ml-2 hover:bg-gray-600 rounded'>watch later</button>
                        </div>
                        <p className='text-gray-400 text-sm'>{release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncate(overview, 170)}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Hero