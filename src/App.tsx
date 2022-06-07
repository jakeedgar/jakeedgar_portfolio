import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Github from './pages/Github'
import { createTheme, ThemeProvider } from '@mui/material'
import About from './pages/About';


const theme = createTheme({
    palette: {
    primary: {
      main:"#510000",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: 
      'Roboto'
    ,
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
})


function App() {

  return (
    <div className='App'>
      <div className='main'>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={(
                <Homepage />
            )} />
              <Route path="/github" element={(
                <Github />
            )} />
            <Route path="/about" element={(
                <About />
            )} />
          </Routes>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
