// import { startTransition } from 'react';
import { actions, defaultState } from './constants';

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.changeName:
            return {
                ...state,
                name: action.payload
            }
        case actions.downHP:
            return {
                ...state,
                hitpoints: state.hitpoints - 1
            }
        case actions.levelUp:
            return {
                ...state,
                level: state.level + 1,
                freeSkillPoints: state.freeSkillPoints + 1,
                freeStatsPoints: state.freeStatsPoints + 1
            }
        case actions.load:
            const gameState = localStorage.getItem('gameState')

            return gameState ? JSON.parse(gameState) : state
        case actions.save:
            localStorage.setItem('gameState', JSON.stringify(state))

            return state
        case actions.upSkill:
            // нужно придумать что-то
            // if (state.freeSkillPoints > 0) {
            //     return {
            //         ...state,
            //         freeSkillPoints: state.freeSkillPoints - 1,
            //         skills: state.skills.map(skill => {
            //             if (skill.name === action.payload) {
            //                 skill.level++
            //             }
            //         })
            //     }
            // } else {
            //     return state
            // }
            return {
                ...state,
                freeSkillPoints: state.freeSkillPoints - 1,
                skills: state.skills.map(skill => {
                    if (skill.name === action.payload) {
                        skill.level++
                    }

                    return skill
                })
            }
        case actions.upStat:
            if (state.freeStatsPoints > 0) {
                const newState = {
                    ...state,
                    freeStatsPoints: state.freeStatsPoints - 1,
                    stats: {
                        ...state.stats,
                        [action.payload]: state.stats[action.payload] + 1
                    },
                }

                newState.dynamicStats = {
                    maxHitpoints: 3 + newState.stats.strength,
                    dodge: 10 + newState.stats.agility,
                    energy: newState.stats.agility + newState.stats.intelligence
                }

                return {
                    ...newState,
                    hitpoints: action.payload === 'strength' ? newState.dynamicStats.maxHitpoints : newState.hitpoints
                }
            } else {
                return state
            }
        default:
            return state;
    }
}