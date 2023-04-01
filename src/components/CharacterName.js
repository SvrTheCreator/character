import { useState } from 'react'
import { changeName } from '../actions'
import { store } from '../index'

function CharacterName() {
    const [name, setName] = useState(store.getState().name)
    const [level, setLevel] = useState(store.getState().level)
    const [hitpoints, setHitpoints] = useState(store.getState().hitpoints)
    const [maxHitpoints, setMaxHitpoints] = useState(store.getState().dynamicStats.maxHitpoints)

    store.subscribe(() => {
        setName(store.getState().name)
        setLevel(store.getState().level)
        setHitpoints(store.getState().hitpoints)
        setMaxHitpoints(store.getState().dynamicStats.maxHitpoints)
    })

    function changeNameHandler() {
        const newName = prompt('Enter new name')
        store.dispatch(changeName(newName))
    }

    return (
        <div className="CharacterName">
            <div className='name'>
                <h1>{name}</h1>
                <button onClick={changeNameHandler}>Выбрать имя</button>
            </div>
            <h3>Здоровье: {hitpoints}/{maxHitpoints}</h3>
            <h4>Lvl: {level}</h4>
        </div>
    );
}

export default CharacterName;