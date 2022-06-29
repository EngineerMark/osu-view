import * as React from 'react';
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from '@mui/lab';
import OsuUserHeaderCard from '../Components/OsuUserHeaderCard';
import OsuUserRanksCard from '../Components/OsuUserRanksCard';
import { parse } from 'node-html-parser';
const helper = require('../Helper');

const osu = require('node-osu');

function PageDirectStats() {
    var [working, setWorkingState] = React.useState(false);
    var [user, setCurrentUser] = React.useState(null);

    const handleRequest = async () => {
        if (working) return;
        setWorkingState(true);

        const username = document.getElementById('input_username').value;

        //this mirrors whatever the api returns, but without having any token authentication stuff in here
        fetch(`https://darkchii.nl/osu/api.php?user=${username}`).then(res => res.json()).then(data => {
            setCurrentUser(data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setWorkingState(false);
        });
    };

    return (
        <>
            <Box>
                <TextField id="input_username" label="Username" variant="standard" sx={{ width: 1 }} />
                <LoadingButton sx={{ mt: 2 }} variant="contained" onClick={handleRequest} loading={working} disabled={working}>Check</LoadingButton>
            </Box>
            {user && <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <OsuUserHeaderCard user={user} />
                    </Grid>
                    <Grid item xs={9}>
                        <OsuUserRanksCard user={user} />
                    </Grid>
                </Grid>
            </Box>}
        </>
    );
}

export default PageDirectStats;
