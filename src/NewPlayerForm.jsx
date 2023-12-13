import { useState } from "react";


const NewPlayerForm = ({ create }) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    // const [submittedPlayer, setSubmittedPlayer] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()

        const newPlayer = {
            name,
            breed,
        }
        create(newPlayer)
        // setSubmittedPlayer(newPlayer);
        setName(''),
        setBreed('');
        
    }

    return (
        <div className="newplayer">
            <h1>Create a new player</h1>
            <p>Using the form below, enter the name and breed of your new player.</p>
            <p>When you're finished, click Submit.</p>
            <form onSubmit={handleSubmit}>
                <label id="name">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </label>
                <br />
                <label id="breed">
                    Breed:
                    <input
                        type="text"
                        value={breed}
                        onChange={(event) => { setBreed(event.target.value) }} />
                </label>
                <br />
                <button type="submit" id="submit">Submit</button>
            </form>

            {/* {submittedPlayer && (
                <div>
                    <h2>Thanks for submitting a new player!</h2>
                    <p>Name: {submittedPlayer.name}</p>
                    <p>Breed: {submittedPlayer.breed}</p>
                </div>
            )} */}

        </div>

    )

}

export default NewPlayerForm