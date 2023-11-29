
export const heroReducer = (state, action) => {
    switch (action.type) {
        case 'get_Hero':
            return action.payload;
        case 'add_Hero':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                name: action.payload.name,
                currentHealth: action.payload.currentHealth,
                maxHealth: action.payload.maxHealth,
                gold: action.payload.gold,
                level: action.payload.level,
                power: action.payload.power
            }
            ]
        case 'delete_Hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'edit_Hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return hero;
                }
            })
        default:
            return state;
    }
}