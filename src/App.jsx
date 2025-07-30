import './App.css'


function App() {
  return (
    <div className="crewmate-container">
      {/* Header Section */}
      <h1 className="crewmate-title">
        Welcome to the Troop Creator!
      </h1>
      {/* Subheader/Description */}
      <p className="crewmate-desc">
        Here is where you can create your very own set of Troop before sending them off into the Arena!
      </p>
      {/* Crewmates Image Section */}
      <div className="troop-img-group">
        {/* Replace src with your crewmate group image */}
        <img
          src="img/traits.png"
          alt="Crewmates"
          className="crewmates-img"
        />
        </div>
        <div className="troop-img-group">
        {/* Replace src with your crewmate group image */}
        <img
          src="img/mainShot.png"
          alt="Crewmates"
          className="spaceship-img"
        />
      </div>
      
    </div>
  )
}

export default App