import { useParams, Link } from "react-router-dom";

const SinglePlayer = ({players, deletePlayer}) => {
    const params = useParams()
    const id = params.id*1

    const player = players.find((player) => {
        return player.id === id
    })

    if(!player){
        return null
    }
    

return (
    <div>
        <h1>{player.name}</h1>
        <h2>{player.breed}</h2>
        <button onClick={() => {deletePlayer(player)}}>Delete Player</button>
        <br/>
        <Link to='/players'>Back to all Players</Link>
    </div>
)


}

export default SinglePlayer