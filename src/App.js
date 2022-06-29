import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Paper, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import PageDirectStats from './Pages/PageDirectStats';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ mt: 16, mb: 16 }}>

          <Container>
            <Paper>
              <AppBar>
                <Container>
                  <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                  </Box>
                </Container>
              </AppBar>
              <Box>
                <Paper elevation={3}>
                  <Toolbar variant="dense">osu!view</Toolbar>
                </Paper>
                <Container sx={{pb:2, pt:2}}>
                  <PageDirectStats />
                </Container>
              </Box>
            </Paper>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;