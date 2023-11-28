
export const generateHealthDifference = (heroLevel, questLevel, power, verdict) => {

    switch (verdict) {
        case 'SUCCESS':
            return 2 * (heroLevel + questLevel) ;
        case 'FAILURE':
            return -1 * Math.ceil((heroLevel + questLevel) * power/3);
        default:
            return
    }
}