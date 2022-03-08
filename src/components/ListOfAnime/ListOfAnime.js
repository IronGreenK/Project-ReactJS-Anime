import React, {Fragment} from "react";
import {Grid, Paper} from "@material-ui/core";
import Anime from "../Animes/Anime/Anime";
import PropTypes from "prop-types";

const ListOfAnimes = ({upcomingAnimes, moviesAnime}) => (
    <Fragment>
        <Grid item xs={12} md={6} lg={6}>
            <h3 className="mt-0">Top Upcoming Anime</h3>
            <Paper elevation={3} className="anime-container">
                <Grid container spacing={2}>
                    <Anime animes={upcomingAnimes} listofanimes/>
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <h3 className="mt-0">Top Movies Anime</h3>
            <Paper elevation={3} className="anime-container">
                <Grid container spacing={2}>
                    <Anime animes={moviesAnime} listofanimes/>
                </Grid>
            </Paper>
        </Grid>
    </Fragment>

);

ListOfAnimes.propTypes = {
    upcomingAnimes: PropTypes.array,
    moviesAnime: PropTypes.array
}

export default ListOfAnimes;
