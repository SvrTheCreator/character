import { useState } from 'react';
import { upSkill } from '../actions';
import { store } from '../index'

function SkillsBoard() {
    const [freeSkillPoints, setFreeSkillPoints] = useState(store.getState().freeSkillPoints)
    const [skills, setSkills] = useState(store.getState().skills)

    store.subscribe(() => {
        setFreeSkillPoints(store.getState().freeSkillPoints)
        setSkills(store.getState().skills)
    })

    function upSkillHandler(event) {
        store.dispatch(upSkill(event.target.id))
    }

    return (
        <div className="SkillsBoard" >
            <div>
                Количество не распределённых очков скилов:  {freeSkillPoints}
            </div>
            {skills.map(skill => <div>{skill.name} : {skill.level}<button onClick={upSkillHandler}> +</button></div>)}
        </div >
    );
}

export default SkillsBoard;