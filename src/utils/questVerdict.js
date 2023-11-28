export const questVerdict = (heroLevel, stageLevel) => {

    let roundVerdict = ["SUCCESS", "FAILURE"]
    let val = ""

    if (heroLevel >= stageLevel)
        val = roundVerdict[0]
    else
        val = roundVerdict[1]

    return val

}