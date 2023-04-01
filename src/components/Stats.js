import { useState } from 'react';
import { upStat } from '../actions';
import { store } from '../index'

function Stats() {
    const [strength, setStrength] = useState(store.getState().stats.strength)
    const [agility, setAgility] = useState(store.getState().stats.agility)
    const [intellegence, setIntellegence] = useState(store.getState().stats.intelligence)
    const [charisma, setCharisma] = useState(store.getState().stats.charisma)
    const [freePoints, setFreePoints] = useState(store.getState().freeStatsPoints)
    const [maxHitpoints, setMaxHitpoints] = useState(store.getState().dynamicStats.maxHitpoints)
    const [dodge, setDodge] = useState(store.getState().dynamicStats.dodge)
    const [energy, setEnergy] = useState(store.getState().dynamicStats.energy)

    store.subscribe(() => {
        setStrength(store.getState().stats.strength)
        setAgility(store.getState().stats.agility)
        setIntellegence(store.getState().stats.intelligence)
        setCharisma(store.getState().stats.charisma)
        setFreePoints(store.getState().freeStatsPoints)
        setMaxHitpoints(store.getState().dynamicStats.maxHitpoints)
        setDodge(store.getState().dynamicStats.dodge)
        setEnergy(store.getState().dynamicStats.energy)
    })

    function upStatHandler(event) {
        // console.log(event.target.id);
        store.dispatch(upStat(event.target.id))
    }

    return (
        <div className="Stats">
            <div>
                <span>Количество не распределённых очков: {freePoints}</span>
                <h4>Базовые статы</h4>
                <ul>
                    <li>Сила: {strength} <button id='strength' onClick={upStatHandler}>+</button></li>
                    <li>Ловкость: {agility} <button id='agility' onClick={upStatHandler}>+</button></li>
                    <li>Интелект: {intellegence} <button id='intelligence' onClick={upStatHandler}>+</button></li>
                    <li>Харизма: {charisma} <button id='charisma' onClick={upStatHandler}>+</button></li>
                </ul>
            </div>
            <div>
                <h4 className='dynamic-stats'>Динамические статы</h4>
                <ul>
                    <li>Максимальное здоровье: {maxHitpoints}</li>
                    <li>Уклонение: {dodge}</li>
                    <li>Энергия: {energy}</li>
                </ul>
            </div>
        </div>
    );
}

export default Stats;