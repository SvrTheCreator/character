import { actions } from "./constants";

export function changeName(name) {
    return {
        type: actions.changeName,
        payload: name
    }
}

export function upStat(statName) {
    return {
        type: actions.upStat,
        payload: statName
    }
}

export function downHP() {
    return {
        type: actions.downHP
    }
}

export function upSkill(skillName) {
    return {
        type: actions.upSkill,
        payload: skillName
    }
}

export function save() {
    return {
        type: actions.save
    }
}

export function load() {
    return {
        type: actions.load
    }
}

export function levelUp() {
    return {
        type: actions.levelUp
    }
}