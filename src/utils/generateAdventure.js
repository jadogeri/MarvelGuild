export const generateAdventure = () => {

    try {
        let adventure = {}
        const adjectives = ['spooky', 'scary', 'dire', 'miserable', 'dangerous', 'deadly',
            'grim', 'depths', 'misterious']
        const locations = ['caves', 'new york', 'grove', 'tundra', 'desert', 'wilderness', 'wakanda']

        const qualifiers = ['no hope', 'no return', 'death', 'hatred', 'evil', 'sorrow']

        adventure.name = ' The ' + adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
            locations[Math.floor(Math.random() * locations.length)] + " of " +
            qualifiers[Math.floor(Math.random() * qualifiers.length)]

        adventure.challengeLevel = Math.floor(Math.random() * 10) + 1

        console.log(adventure);
        return adventure
    } catch (e) { console.log(e); }

}