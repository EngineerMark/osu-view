import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Flag from 'react-world-flags';
import OsuRankWidget from './OsuRankWidget';
const lookup = require('country-code-lookup')


function OsuUserRanksCard(props) {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2.4}>
                    <OsuRankWidget value={props.user.count_rank_ssh} name="Silver SS" />
                </Grid>
                <Grid item xs={2.4}>
                    <OsuRankWidget value={props.user.count_rank_ss} name="Gold SS" />
                </Grid>
                <Grid item xs={2.4}>
                    <OsuRankWidget value={props.user.count_rank_sh} name="Silver S" />
                </Grid>
                <Grid item xs={2.4}>
                    <OsuRankWidget value={props.user.count_rank_s} name="Gold S" />
                </Grid>
                <Grid item xs={2.4}>
                    <OsuRankWidget value={props.user.count_rank_a} name="A" />
                </Grid>
            </Grid>
        </>
    );
}

export default OsuUserRanksCard;
