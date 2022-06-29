import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Flag from 'react-world-flags';
import NumberFormat from 'react-number-format';


function OsuRankWidget(props) {
    return (
        <>
            <Card elevation={3}
                sx={{
                    py: 5,
                    boxShadow: 0,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3"><NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} /></Typography>

                <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                    {props.name}
                </Typography>
            </Card>
        </>
    );
}

export default OsuRankWidget;
