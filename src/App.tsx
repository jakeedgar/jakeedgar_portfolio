import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import logo from './je_logo512.png';
import './App.css';
import background from './background.png';
import auto from './auto.png';
import didact from './didact.png';


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
              backgroundImage: `url(${auto})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${didact})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{start: 0, end: 3 }}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'auto auto'
            }}
          ></ParallaxLayer>

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
