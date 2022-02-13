import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Appointments from './containers/Appointments'
import { Typography } from '@mui/material';


const App = () => {
  return (
    <Box component='div' className="App">
      <header className="App-header">zoomcare</header>
      <main className="App-body">
        <Paper 
          id='app-subHeader' 
          square  
          elevation={10} 
          sx={{ 
            p: '16px 24px',
            borderBottomWidth:' 1px', 
            borderColor: 'rgb(219, 219, 219)', 
            borderLeftWidth: '1px', 
            borderRightWidth: '1px', 
            border: '0px solid black',
            m: '1px' 
          }} >
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.05rem' }} color="text.primary">
              Schedule your appointment
            </Typography>
        </Paper>
        <Appointments />
        </main>
      <footer className="App-footer">Footer</footer>
    </Box>
  );
}

export default App;
