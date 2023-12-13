import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const AllPlayers = ({players}) => {
    return (
        <div className="allplayers">
            <h1>All Players</h1>
            <SearchBar players={players}/>

            <ul>
                {
                    players.map((player) => {
                        return (
                            <li key={player.id}>
                                <Link to={`/players/${player.id}`}>
                                    {player.name}
                                </Link>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default AllPlayers