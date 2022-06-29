import { Card, CardContent, CardMedia, Chip, Tooltip, Typography } from '@mui/material';
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
                    image={"https://a.ppy.sh/" + props.user.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"><Flag code={props.user.country.code} height="16"/> {props.user.country.name}</Typography>
                    {
                        props.user.groups.map(group => (
                            <Tooltip title={group.name}><Chip sx={{mx:0.5,my:0.5}} label={group.short_name} color="secondary" variant="outlined" /></Tooltip>
                        ))
                    }
                </CardContent>
            </Card>
        </>
    );
}

export default OsuUserHeaderCard;
