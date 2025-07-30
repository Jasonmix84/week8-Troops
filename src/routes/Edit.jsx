import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Edit.css'
import { supabase } from '../client'

const Edit = () => {
    const { id } = useParams()
    const [troop, setTroop] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch troop data on mount
    useEffect(() => {
        const fetchTroop = async () => {
            setLoading(true)
            const { data, error } = await supabase
                .from('troop')
                .select()
                .eq('id', id)
                .single()
            setTroop(data) // data will be null if not found
            setLoading(false)
        }
        fetchTroop()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target
        setTroop(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const updateTroop = async (event) => {
        event.preventDefault()
        await supabase
            .from('troop')
            .update({
                name: troop.name,
                trait1: troop.trait1,
                trait2: troop.trait2,
                elixir: troop.elixir
            })
            .eq('id', id)
        window.location = "/"
    }

    const deleteTroop = async (event) => {
        event.preventDefault()
        await supabase
            .from('troop')
            .delete()
            .eq('id', id)
        window.location = "/"
    }

    if (loading) {
        return <div className="Edit"><h2>Loading...</h2></div>
    }

    if (!troop) {
        return (
            <div className="Edit" style={{ textAlign: "center", marginTop: "3rem" }}>
                <h2>No troop found with that id</h2>
                <Link to="/Create">
                    <button>Create a Troop</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="Edit">
            <div className="create-header">
                <h1>Edit Troop {troop.name}</h1>
                <p>
                    <strong>Name:</strong> {troop.name}<br />
                    <strong>Trait 1:</strong> {troop.trait1}<br />
                    <strong>Trait 2:</strong> {troop.trait2}<br />
                    <strong>Elixir:</strong> {troop.elixir}
                </p>
            </div>

            <form className="create-form" onSubmit={updateTroop}>
                <div className="form-name">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter Name:'
                        value={troop.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-trait1">
                    <label htmlFor="trait1">Trait 1: </label>
                    <select
                        id="trait1"
                        name="trait1"
                        value={troop.trait1}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select an option</option>
                        <option value="Ace">Ace</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Avenger">Avenger</option>
                        <option value="Brawler">Brawler</option>
                        <option value="Clan">Clan</option>
                        <option value="Goblin">Goblin</option>
                        <option value="Juggernaut">Juggernaut</option>
                        <option value="Noble">Noble</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Thrower">Thrower</option>
                        <option value="Undead">Undead</option>
                    </select>
                </div>
                <div className="form-trait2">
                    <label htmlFor="trait2">Trait 2: </label>
                    <select
                        id="trait2"
                        name="trait2"
                        value={troop.trait2}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select an option</option>
                        <option value="Ace">Ace</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Avenger">Avenger</option>
                        <option value="Brawler">Brawler</option>
                        <option value="Clan">Clan</option>
                        <option value="Goblin">Goblin</option>
                        <option value="Juggernaut">Juggernaut</option>
                        <option value="Noble">Noble</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Thrower">Thrower</option>
                        <option value="Undead">Undead</option>
                    </select>
                </div>
                <div className="form-elixir">
                    <p>Select Your Troop's Elixir:<br /></p>
                    {[2, 3, 4, 5].map(num => (
                        <span key={num}>
                            <input
                                type="radio"
                                id={num}
                                name="elixir"
                                value={num}
                                checked={troop.elixir === String(num)}
                                onChange={handleChange}
                            />
                            <label htmlFor={num}>{num}</label><br />
                        </span>
                    ))}
                </div>
                <div className="form-confirm" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <button type="submit">Confirm Edit</button>
                    <button type="button" style={{ background: "#c00", color: "#fff" }} onClick={deleteTroop}>Delete Troop</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;