import './App.css';
import { Box } from '@mui/material';
import Appointments from './containers/Appointments'


const App = () => {
  return (
    <Box component='div' className="App">
      <header className="App-header">Header</header>
      <main className="App-body"><Appointments /></main>
      <footer className="App-footer">Footer</footer>
    </Box>
  );
}

export default App;
