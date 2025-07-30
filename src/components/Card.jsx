import { Link } from "react-router-dom";
import "./Card.css";

const traitImages = {
  Ace: "img/ace.png",
  Assassin: "img/assassin.png",
  Avenger: "img/avenger.png",
  Brawler: "img/brawler.png",
  Clan: "img/clan.png",
  Goblin: "img/goblin.png",
  Juggernaut: "img/juggernaut.png",
  Noble: "img/noble.png",
  Ranger: "img/ranger.png",
  Thrower: "img/thrower.png",
  Undead: "img/undead.png",
  // Add more trait-image mappings as needed
};

const Card = ({ id, name, trait1, elixir, created_at}) => {
  return (
    <div className="troop-card">
      {/* Make the card clickable */}
      <Link to={`/Troop/${id}`} className="card-link">
        <div className="card-image">
          {/* Display image based on trait1 */}
          <img
            src={traitImages[trait1] || "/img/default.png"}
            alt={trait1}
            className="trait-img"
          />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>Trait: {trait1}</p>
          <p>Elixir: {elixir}</p>
          <p>Created At: {new Date(created_at).toLocaleString()}</p>
        </div>
      </Link>
      {/* Edit button at the bottom */}
      <div className="card-actions">
        <Link to={`/Edit/${id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;