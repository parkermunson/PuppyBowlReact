import { useState } from "react";

const SearchBar = ({players }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = players.filter((player) => {
        return player.name.indexOf(searchTerm) !== -1
    })

return (
    <div>
        <h3> Search for a player:</h3>
        <label>
            <input 
                type="text"
                value={searchTerm}
                onChange={(event) => {setSearchTerm(event.target.value)} }
                />
        </label>
        {
            searchTerm.length > 0 ?
            <div>
                <h3>Viewing {filteredTerms.length} of {players.length}</h3>
                <ul>
                    {
                        filteredTerms.map((player) => {
                            return <li key={player.id}>{player.name}</li>
                        })
                    }
                </ul>
             </div>

             : null
        }
    </div>
)

}

export default SearchBar