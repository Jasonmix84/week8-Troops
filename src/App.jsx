import './App.css'


function App() {
  return (
    <div className="crewmate-container">
      {/* Header Section */}
      <h1 className="crewmate-title">
        Welcome to the Crewmate Creator!
      </h1>
      {/* Subheader/Description */}
      <p className="crewmate-desc">
        Here is where you can create your very own set of crewmates before sending them off into space!
      </p>
      {/* Crewmates Image Section */}
      <div className="crewmate-img-group">
        {/* Replace src with your crewmate group image */}
        <img
          src="img/Crewmates.png"
          alt="Crewmates"
          className="crewmates-img"
        />
      </div>
      {/* Spaceship Image Section */}
      <div className="spaceship-img-group">
        {/* Replace src with your spaceship image */}
        <img
          src="img/Ship.png"
          alt="Spaceship"
          className="spaceship-img"
        />
      </div>
    </div>
  )
}

export default App