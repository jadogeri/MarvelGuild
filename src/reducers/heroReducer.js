const heroReducer = (updatedHero, action) => {
    console.log('IN HERO REDUCER LINE 2',updatedHero);
    
try{
    switch (action.attributeToChange) {

        case 'update':
            return {
                ...updatedHero,
                currentHealth: updatedHero.currentHealth + 5,
                maxHealth: updatedHero.maxHealth + 5,
                level: updatedHero.level + 1,
                power: updatedHero.power + 5,
                gold: updatedHero.gold - action.amount
                
            }
       
        default:
            console.log('line 97',updatedHero);
            return updatedHero
    }
}catch(e){
    console.log('details line 104',e);
}

}

export default heroReducer;