import React, {createContext, useEffect, useState} from "react";
import {search, topMovies, topUncoming} from "../constans";

const dotenv = require('dotenv');
dotenv.config();
export const AnimeContext = createContext();

const AnimeContextProvider = ({children}) => {
    const [doneTopAnime, setDoneTopAnime] = useState(false);
    const [doneTopMovie, setDoneTopMovie] = useState(false);
    const [doneSearchAnime, setDoneSearchAnime] = useState(false);
    const [anime, setAnime] = useState([]);
    const [movie, setMovie] = useState([]);
    const [topUpcoming, setTopUncoming] = useState([]);
    const type = "anime";

    useEffect(() => searchAnime(), []);
    useEffect(() => getTopUpcoming(), []);
    useEffect(() => getTopMovie(), []);

    const searchAnime = (anime) => {
        fetch(search(anime), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.API_HOST,
                "x-rapidapi-key": process.env.API_KEY
            }
        })
            .then(response => {
                response.json()
            })
            .then(data => {
                setDoneTopAnime(false);
                setDoneSearchAnime(true);
                setDoneTopAnime(false)
                setAnime(data.results)

            })
            .catch(err => {
                console.error(err);
            });
    }

    const getTopUpcoming = () => {
        fetch(topUncoming(type), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "0e274b1d45mshf1eaad7d4827458p1c2364jsnccda405a47f9"
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
                "x-rapidapi-key": "0e274b1d45mshf1eaad7d4827458p1c2364jsnccda405a47f9"
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


    const validateQAnime = (e) => {
        let q_anime = e.target.value.toLowerCase().trim();
        if (e.type === 'keypress' && e.key === 'Enter') {
            if (q_anime) {
                //setCurrentQGame(q_anime);
                setDoneTopAnime(false);
                setDoneTopMovie(false);
                setDoneSearchAnime(false);
                //getSearchedGames(q_anime);
            }
        }
    };

    return (
        <AnimeContext.Provider value={{anime, movie, doneTopAnime, doneTopMovie, doneSearchAnime, validateQAnime}}>
            {children}
        </AnimeContext.Provider>
    );
};

export default AnimeContextProvider;
