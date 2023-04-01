import { store } from '../index'
import { downHP, levelUp, load, save } from '../actions'
function levelUpHandler() {
    store.dispatch(levelUp())
}
function damageHadler() {
    store.dispatch(downHP())
}
function saveHandler() {
    store.dispatch(save())
}
function loadHandler() {
    store.dispatch(load())
}
function Button() {
    return (
        <div className="Button">
            <button onClick={levelUpHandler}>level up</button>
            <button onClick={damageHadler}>damage</button>
            <button onClick={saveHandler}>save</button>
            <button onClick={loadHandler}>load</button>
        </div>
    );
}

export default Button;