import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import './Gallery.css'

const Gallery = (props) => {
    const [troops, setTroops] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('troop')
                .select()
                .order('created_at', { ascending: false })
                // set state of troops
                setTroops(data)
                console.log("data is", data)
            }
            fetchPosts()
    }, [props])


    return (
       <div className="Gallery">
            {
                troops && troops.length > 0 ?
                troops.map((troop,index) => 
                    <Card 
                        key={troop.id}
                        id={troop.id} 
                        name={troop.name}
                        trait1={troop.trait1}
                        trait2={troop.trait2}
                        elixir={troop.elixir}
                        created_at={troop.created_at}
                    />
                ) : 
                <div>
                    <h2 >{'No Troops Created Yet 😞'}</h2>
                    <Link 
                        style={{ color: "White" }}
                        to={'/Create'}
                    >
                        Create A Troop!
                    </Link>
                </div>
            }
        </div>  
    )
}

export default Gallery