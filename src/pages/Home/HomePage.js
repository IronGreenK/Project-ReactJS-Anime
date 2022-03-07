import {Fragment, useContext} from "react";
import {Grid, Paper} from "@material-ui/core";
import {AnimeContext} from "../../contexts/AnimeContext";
import Message from "../../components/Common/Message";
import ProgressBar from "../../components/Common/ProgressBar";
import ListOfAnime from "../../components/ListOfAnime/ListOfAnime";

const HomePage = () => {
    const {
        anime,
        movie,
        doneTopAnime,
        doneSearchAnime,
        doneTopMovie,
        validateQAnime
    } = useContext(AnimeContext);
    return (
        <Fragment>
            <Grid container spacing={2} style={{marginTop: '1rem'}}>
                {!doneSearchAnime ? (
                    doneTopAnime &&
                    doneTopMovie ? (
                        <ListOfAnime
                            upcomingAnimes={anime}
                            moviesAnime={movie}
                        />
                    ) : (
                        <ProgressBar/>
                    )
                ) : (
                    <Message text="No results found"/>
                )}
            </Grid>
        </Fragment>
    )
}

export default HomePage;