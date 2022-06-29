import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import Flag from 'react-world-flags';
const lookup = require('country-code-lookup')


function OsuUserHeaderCard(props) {
    return (
        <>
            <Card elevation={3} sx={{ width: 1 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image={"https://a.ppy.sh/" + props.user.user_id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"><Flag code={props.user.country} height="16"/> {lookup.byIso(props.user.country).country}</Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default OsuUserHeaderCard;
