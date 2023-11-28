// and current level
export const generateGoldDifference = (heroLevel, questLevel, power, verdict) => {

    switch (verdict) {
        case 'SUCCESS':
            return (heroLevel * questLevel) + power;
        case 'FAILURE':
            return - 1 * Math.ceil(((heroLevel * questLevel) + power / 2));
        default:
            return
    }

}

