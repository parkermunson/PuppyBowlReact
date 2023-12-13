import { useState, useEffect } from 'react'
import { Link, useLocation, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Homepage from './Homepage'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import NewPlayerForm from './NewPlayerForm'

function App() {
const [players, setPlayers] = useState([])
const navigate = useNavigate()

useEffect (() => {
  const fetchPlayers = async () => {
    const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
    setPlayers(data.data.players)
  } 
  fetchPlayers()
}, [])

const create = async (newPlayer) => {
  const { data } = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310/players', newPlayer)
  setPlayers([...players, data.data.newPlayer])
  navigate(`/players/${data.data.newPlayer.id}`)
}

const deletePlayer = async (deletedPlayer) => {
  await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${deletedPlayer.id}`)
  setPlayers(players.filter((remainingPlayers) => {return remainingPlayers.id !== deletedPlayer.id}))
  navigate('/players')
}

  return (
      <div>
        <nav className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/players'>View All Players</Link>
          <Link to='/newplayer'>Create New Player</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/players' element={<AllPlayers players={players}/>}/>
          <Route path ='/players/:id' element={<SinglePlayer players={players} deletePlayer={deletePlayer}/>}/>
          <Route path='/newplayer/' element={<NewPlayerForm create={create}/>} />  

        </Routes>


      </div>
  )
}

export default App
