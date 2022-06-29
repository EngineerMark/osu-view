import * as React from 'react';
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from '@mui/lab';
import OsuUserHeaderCard from '../Components/OsuUserHeaderCard';
import OsuUserRanksCard from '../Components/OsuUserRanksCard';

const osu = require('node-osu');

function PageDirectStats() {
    var [working, setWorkingState] = React.useState(false);
    var [user, setCurrentUser] = React.useState(null);

    const handleRequest = async () => {
        if (working) return;
        setWorkingState(true);

        const username = document.getElementById('input_username').value;
        const apikey = document.getElementById('input_apikey').value;

        const osuApi = new osu.Api(apikey, {
            notFoundAsError: true,
            completeScores: false,
            parseNumeric: false
        });

        osuApi.apiCall('/get_user', { u: username }).then(user => {
            osuApi.getUserBest({ u: username, limit: 100 }).then(best => {
                setWorkingState(false);
                user[0].best = best;
                console.log(user[0]);
                setCurrentUser(user[0]);
            }).catch(err => {
                console.log(err);
                setWorkingState(false);
            });
            // setCurrentUser(user[0]);
        }).catch(err => {
            console.log(err);
            setWorkingState(false);
        });

    };

    return (
        <>
            <Box>
                <TextField id="input_username" label="Username" variant="standard" sx={{ width: 1 }} />
                <TextField id="input_apikey" label="API Key" variant="standard" sx={{ width: 1 }} />
                <Typography variant="caption">Find it at <a target="_blank" rel="noreferrer" href="https://osu.ppy.sh/p/api/">osu.ppy.sh/p/api/</a></Typography><br />
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
