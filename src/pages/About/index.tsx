import NavBar from '../../components/NavBar/NavBar'
import './styles.css'
import Photo from '../../shapes/Jake-Edgar-Profile.png'

const me = "I'm Jake. I am a self taught coder on a long journey in a field I love. I enrolled at Epicodus to sharpen my skills, but at the end of the day I am a coder because I love to work with complex problems and new technologies. TypeScript, React, and sleek modern design are my absolute weak spots. Feel free to send me an email: jakeedgar1012@gmail.com"

const About = () => {
    return (
        <section className="aboutPage">
          <NavBar />
        <h4 className='about'>{me}</h4>
          <img className='photo' src={Photo} alt=''/>
        </section>

    )
}

export default About;