import { questVerdict } from "../utils/questVerdict"
import { generateGoldDifference } from "../utils/generateGoldDifference"
import { generateHealthDifference } from "../utils/generateHealthDifference"

export const battleHandler = (hero, display, stageLevel) => {
   

    //checking to see if battle was a success or failur
    let answer = questVerdict(hero.level, stageLevel)
    display.roundVerdict = answer
    console.log('round verdict is ' + display.roundVerdict);

    display.goldDifference = generateGoldDifference(hero.level, stageLevel, hero.power, answer)
    display.healthDifference = generateHealthDifference(hero.level, stageLevel, hero.power, answer)

    display.newGold = hero.gold + display.goldDifference
    display.newHealth = hero.currentHealth + display.healthDifference

    console.log('line 95 adventure screen');
    console.log(JSON.stringify(display.roundVerdict))    

    if (hero.maxHealth < display.newHealth) {
        display.newHealth = hero.maxHealth
    } 

}
