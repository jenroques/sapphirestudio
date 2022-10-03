import './App.css';
import Header from './sections/Header'

import "./fonts/neris-cufonfonts-webfont/Neris-Thin.woff"

import {
  Box
}
  from '@mui/material';


const blue = {
  50: '#001125',
  100: '#001125',
  200: '#001125',
  300: '#001125',
  400: '#001125',
  500: '#001125',
  600: '#001125',
  700: '#001125',
  800: '#001125',
  900: '#001125',
};


function App() {
  return (
    <div className="App"  >
      <header className="App-header">

        <Header />

      </header>
      <Box sx={{ color: `${blue[500]}` }}>
      </Box>

    </div>
  );
}

export default App;
