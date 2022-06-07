```ts
import { useRef } from 'react'
import '../../App';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import auto from '../../auto.png';
import didact from '../../didact.png';
import NavBar from '../NavBar/NavBar'

const ParallaxPage = () => {
    const parallax = useRef<IParallax>(null!)
    return (
    <div className="parralax">
        <Parallax pages={2} ref={parallax}>
            <ParallaxLayer
              offset={0}
              speed={1}
              factor={2}
              style={{
                backgroundImage: `url(${auto})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>

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
              offset={0}
              speed={0.05}
              onClick={() => parallax.current.scrollTo(3)}
            >
            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              speed={2}
              onClick={() => parallax.current.scrollTo(0)}
            >
            </ParallaxLayer>
          </Parallax>
    </div>
    )
}

export default ParallaxPage;
```