import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

const traitImages = {
  Ace: "../img/ace.png",
  Assassin: "../img/assassin.png",
  Avenger: "../img/avenger.png",
  Brawler: "../img/brawler.png",
  Clan: "../img/clan.png",
  Goblin: "../img/goblin.png",
  Juggernaut: "../img/juggernaut.png",
  Noble: "../img/noble.png",
  Ranger: "../img/ranger.png",
  Thrower: "../img/thrower.png",
  Undead: "../img/undead.png",
  // Add more trait-image mappings as needed
};

function TroopDetails(props) {
    const { id } = useParams();
    const [troop, setTroop] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchTroop = async () => {
            setLoading(true)
            const { data, error } = await supabase
                .from('troop')
                .select()
                .eq('id', id)
                .single()
            setTroop(data)
            setLoading(false)
        }
        fetchTroop()
    }, [id])

    return (
    <div className="troop-details"
        style={{
            position: "absolute",
            right: "30%",
            top: "10%",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "1.5rem",
        }}>
        <h2>Troop Details for ID: {id}</h2>
        {/* Add margin below the h2 and above the table */}
        {loading ? (
            <p>Loading...</p>
        ) : troop ? (
            <>
                <div
                    className="card-image"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        margin: "2.5rem 0 4rem 0" // More space above and below images
                    }}
                >
                    <img
                        src={traitImages[troop.trait1] || "/img/default.png"}
                        alt={troop.trait1}
                        className="trait-img"
                        style={{ width: "200px", height: "200px", objectFit: "contain" }}
                    />
                    <img
                        src={traitImages[troop.trait2] || "/img/default.png"}
                        alt={troop.trait2}
                        className="trait-img"
                        style={{ width: "200px", height: "200px", objectFit: "contain" }}
                    />
                </div>
                <div className="card-content">
                    <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "150%" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Created At</th>
                                <th>Name</th>
                                <th>Trait 1</th>
                                <th>Trait 2</th>
                                <th>Elixir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{troop.id}</td>
                                <td>{new Date(troop.created_at).toLocaleString()}</td>
                                <td>{troop.name}</td>
                                <td>{troop.trait1}</td>
                                <td>{troop.trait2}</td>
                                <td>{troop.elixir}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link to={`/Edit/${id}`}>
                <button>Edit Troop</button>
            </Link>
        </div>
            </>
        ) : (
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <p style={{ color: "red" }}>No troop found with ID: {id}</p>
            <Link to={'/Create'}>
                <button>Create A Troop</button>
            </Link>
            </div>
        )}
    </div>
)
}
export default TroopDetails;