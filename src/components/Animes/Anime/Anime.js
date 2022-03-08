import React, {Fragment} from "react";
import {Card, CardContent, CardMedia, Grid} from "@material-ui/core";

const Anime = ({animes, listofanimes}) => {
    return (
        <Fragment>
            {animes.map((anime) => {
                //const { id, background_image, name, released, parent_platforms } = game;
                const {
                    end_date,
                    episodes,
                    image_url,
                    mal_id,
                    membersm,
                    rank,
                    score,
                    start_date,
                    title,
                    type,
                    url
                } = anime;

                const imgSrc = image_url
                    ? image_url
                    : require("../../../assets/img/placeholder.png");
                return (
                    <Grid key={mal_id} item xs={12} sm={listofanimes ? 12 : 6} md={listofanimes ? 12 : 4}>
                        <Card variant="outlined" className="card">
                            <CardMedia
                                className="card-anime-image"
                                title={title}
                            />
                            <CardContent className="card-anime-content">
                                <div>
                                    <h4 className="card-anime-name text-white">{title}</h4>
                                    <p className="card-anime-released text-white">{start_date}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <div>
                                <img className="card-anime-image" src={imgSrc} alt=""/>
                            </div>
                        </Card>
                    </Grid>
                );
            })}
        </Fragment>
    );
};

export default Anime;