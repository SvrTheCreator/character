export const actions = {
    changeName: 'CHANGE_NAME',
    upStat: 'UP_STATS',
    downHP: 'DOWN_HP',
    upSkill: 'UP_SKILL',
    save: 'SAVE',
    load: 'LOAD',
    levelUp: 'LEVEL_UP'
}

export const defaultState = {
    name: '',
    level: 1,
    hitpoints: 3,
    freeSkillPoints: 0,
    freeStatsPoints: 0,
    stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
    },
    dynamicStats: {
        maxHitpoints: 3,
        dodge: 10,
        energy: 0
    },
    skills: [
        {
            name: 'атака',
            level: 0
        },
        {
            name: 'стелс',
            level: 0
        },
        {
            name: 'стрельба из лука',
            level: 0
        },
        {
            name: 'обучаемость',
            level: 0
        },
        {
            name: 'выживание',
            level: 0
        },
        {
            name: 'медицина',
            level: 0
        },
        {
            name: 'запугивание',
            level: 0
        },
        {
            name: 'проницательность',
            level: 0
        },
        {
            name: 'внешний вид',
            level: 0
        },
        {
            name: 'манипулирование',
            level: 0
        }
    ]
}