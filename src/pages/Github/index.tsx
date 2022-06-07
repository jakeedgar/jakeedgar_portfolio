import NavBar from '../../components/NavBar/NavBar'
import './styles.css'

const Github = () => {
    return (
        <section className="github">
          <NavBar />
          <ul>
            <li><a href="https://github.com/jakeedgar/mtg-team-week">My Epicodus TeamWeak Project</a></li>
              <ul>
                <li>A project experimenting with API calls and Magic the Gathering Calls.</li>
              </ul>
            <li><a href='https://github.com/jakeedgar/greeter-python'>Python Greeter</a></li>
              <ul>
                <li>A simple Greeter App with Python.</li>
              </ul>
          </ul>
        </section>
    )
}

export default Github;