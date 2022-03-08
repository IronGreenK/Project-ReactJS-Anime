import {Fragment, useContext} from "react";
import {Grid} from "@material-ui/core";
import {AnimeContext} from "../../contexts/AnimeContext";
import Message from "../../components/Common/Message";
import ProgressBar from "../../components/Common/ProgressBar";
import ListOfAnime from "../../components/ListOfAnime/ListOfAnime";
import SearchBar from "../../components/Animes/SearchBar/SearchBar";
import Anime from "../../components/Animes/Anime/Anime";

const HomePage = () => {
    const {
        anime,
        movie,
        doneTopAnime,
        doneSearchAnime,
        doneTopMovie,
        validateAnime,
        searchedAnime,
        controlError,
    } = useContext(AnimeContext);
    return (
        <Fragment>
            <SearchBar validateAnime={validateAnime} />
            <Grid container spacing={2} style={{marginTop: '1rem'}}>
                {!doneSearchAnime? (
                    doneTopAnime &&
                    doneTopMovie
                     ? (
                        <ListOfAnime
                            upcomingAnimes={anime}
                            moviesAnime={movie}
                        />
                    ) : (
                        <ProgressBar/>
                    )
                ) : searchedAnime.length ? (
                    <Anime animes={searchedAnime} />
                ): (
                    <Message text="No results found"/>
                )}
            </Grid>
        </Fragment>
    )
}

export default HomePage;