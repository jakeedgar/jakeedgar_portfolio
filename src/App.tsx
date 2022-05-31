import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import logo from './je_logo512.png';
import './App.css';
import background from './background.png';
import backgroundtwo from './backgroundtwo.png';
import gif from './gif.gif';


function App() {
  const parallax = useRef<IParallax>(null!)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Parallax pages={3} ref={parallax}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${backgroundtwo})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
            }}
          >
            <img src={gif} alt=''/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.05}
            onClick={() => parallax.current.scrollTo(3)}
          >
            {/* <h2>End</h2> */}
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => parallax.current.scrollTo(0)}
          >
            {/* <h2>Begin</h2> */}
          </ParallaxLayer>
        </Parallax>
    </div>
  );
}

export default App;
