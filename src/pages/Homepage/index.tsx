import Directory from '../../components/Directory/Directory'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <section className="homepage">
            <NavBar />
            <Directory />
        </section>
    )
}

export default HomePage;