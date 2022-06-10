import { useRef } from 'react'
import '../../App';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import auto from '../../auto.png';
import didact from '../../didact.png';
import light_circ from '../../shapes/light_circ.png'
import dark_circ from '../../shapes/dark_circ.png'
import light_small_square from '../../shapes/light_small_squa.png'
import light_square from '../../shapes/light_squa.png'
import light_triangle from '../../shapes/light_tri.png'
import sholem from '../../shapes/sholem_aleichem.png'
import other_circ from'../../shapes/other_circ.png'

const ParallaxPage = () => {
    const parallax = useRef<IParallax>(null!)
    return (
    <div className="parallax">
        <Parallax pages={4} ref={parallax}>
          {/* <ParallaxLayer
            horizontal={false}
            offset={1}
            speed={1.25}
            factor={1}
            >
            </ParallaxLayer> */}
            <ParallaxLayer
              horizontal={true}
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
              offset={0}
              speed={.35}
              factor={2}
              style={{
                backgroundImage: `url(${light_circ})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>
            <ParallaxLayer
              offset={.5}
              speed={1}
              factor={2}
              style={{
                backgroundImage: `url(${light_small_square})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1}
              factor={2.5}
              style={{
                backgroundImage: `url(${light_triangle})`,
                backgroundSize: 'contain',
              }}
              >
            </ParallaxLayer>
            <ParallaxLayer
              offset={.5}
              speed={.5}
              factor={2}
              style={{
                backgroundImage: `url(${other_circ})`,
                backgroundSize: 'contain',
              }}
            ></ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={.1}
              factor={1.5}
              style={{
                backgroundImage: `url(${light_square})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>
            <ParallaxLayer
              horizontal={false}
              offset={2}
              speed={.5}
              factor={3}
              style={{
                backgroundImage: `url(${didact})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={.5}
              factor={3}
              style={{
                backgroundImage: `url(${sholem})`,
                backgroundSize: 'contain',
              }}
            >
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.05}
              onClick={() => parallax.current.scrollTo(3)}
            >
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={0.05}
              onClick={() => parallax.current.scrollTo(0)}
            >
            </ParallaxLayer>
          </Parallax>
    </div>
    )
}
export default ParallaxPage;