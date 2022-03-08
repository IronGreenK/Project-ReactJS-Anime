import React, {createContext, useEffect, useState} from "react";
import {search, searchAnimeTitle, topMovies, topUncoming} from "../constans";
import async from "async";
import PropTypes from "prop-types";

const dotenv = require('dotenv');
dotenv.config();
export const AnimeContext = createContext();

const AnimeContextProvider = ({children}) => {
    const [doneTopAnime, setDoneTopAnime] = useState(false);
    const [doneTopMovie, setDoneTopMovie] = useState(false);
    const [doneSearchAnime, setDoneSearchAnime] = useState(false);
    const [controlError, setControlError] = useState(false);
    const [anime, setAnime] = useState([]);
    const [movie, setMovie] = useState([]);
    const [searchedAnime,setSearchedAnime] = useState([]);
    const type = "anime";

    useEffect(() => getTopUpcoming(), []);
    useEffect(() => getTopMovie(), []);

    const searchAnime = async (title) => {
        await fetch(searchAnimeTitle(title), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "ad63b3b5e9msh04cc987ff613dc0p149ed6jsn3c2b609178fa"
            }
        })  .then((res) => res.json())
            .then((data) => {
                setDoneSearchAnime(true);
                setSearchedAnime(data.results)
            })
            .catch(err => {
                console.log(err)
                setControlError(true);

            });
    }

    const getTopUpcoming = () => {
        fetch(topUncoming(type), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "ad63b3b5e9msh04cc987ff613dc0p149ed6jsn3c2b609178fa"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setDoneTopAnime(true);
                setDoneSearchAnime(false);
                setAnime(data.top);
            })
            .catch((err) => console.log(err));
    };

    const getTopMovie = () => {
        fetch(topMovies(type), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "ad63b3b5e9msh04cc987ff613dc0p149ed6jsn3c2b609178fa"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setDoneTopMovie(true);
                setDoneSearchAnime(false);
                setMovie(data.top);
            })
            .catch((err) => console.log(err));
    };

    const validateAnime = async (e) => {
        let q_anime = e.target.value.toLowerCase().trim();
        if (e.type === 'keypress' && e.key === 'Enter') {
            if (q_anime.length >= 3) {
                setDoneTopAnime(false);
                setDoneTopMovie(false);
                setDoneSearchAnime(false);
                await searchAnime(q_anime);
            }else{
                setControlError(true);
            }
        }
    };

    return (
        <AnimeContext.Provider value={{anime, movie, doneTopAnime, doneTopMovie, doneSearchAnime, validateAnime,searchedAnime,controlError}}>
            {children}
        </AnimeContext.Provider>
    );
};

AnimeContextProvider.propTypes = {
    anime: PropTypes.array
}

export default AnimeContextProvider;
