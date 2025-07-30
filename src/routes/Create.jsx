import { useState } from 'react'
import { supabase } from '../client'
import './Create.css'

const Create = () => {
    const [troop, setTroop] = useState({ name: "", trait1: "", trait2: "", elixir: "" })

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setTroop(prev => ({ ...prev, [name]: value }))
    }



    // (Optional) Submit to supabase
    const createTroop = async (event) => {
        event.preventDefault()
        await supabase
            .from('troop')
            .insert({name: troop.name, trait1: troop.trait1, trait2: troop.trait2, elixir: troop.elixir})
            .select()
        window.location = "/"
    }

    return (
        <div className="Create">
            <div className="create-header">
                <h1>Create A New Troop</h1>
            </div>

            <form className="create-form">
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
                <div className="form-confirm">
                    <button type="button" onClick={createTroop}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Create