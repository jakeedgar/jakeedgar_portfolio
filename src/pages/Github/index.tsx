import NavBar from '../../components/NavBar/NavBar'
import './styles.css'

const Github = () => {
    return (
        <section className="github">
          <NavBar />
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TCG Deck Generator</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Epicodus Project using APIs and JavaScript</h6>
                  <p className="card-text">Team weak project. We used Promise based API calls and had a lot of fun.</p>
                  <a href="https://github.com/jakeedgar/mtg-team-week" className="btn btn-default">GITHUB REPO</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Python Greeter</h5>
                  <h6 className="card-subtitle mb-2 text-muted">A Python console app.</h6>
                  <p className="card-text">Simple Python App using the method Pickle to store data.</p>
                  <a href="https://github.com/jakeedgar/greeter-python" className="btn btn-default">GITHUB REPO</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TypeScript Template</h5>
                  <h6 className="card-subtitle mb-2 text-muted">A TS template.</h6>
                  <p className="card-text">TypeScript template built out for Jest / TDD testing.</p>
                  <a href="https://github.com/jakeedgar/ts-template" className="btn btn-default">GITHUB REPO</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Github;