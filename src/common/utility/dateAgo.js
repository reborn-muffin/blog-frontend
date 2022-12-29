const words = {
    hours: ['годину', 'години', 'годин'],
    minutes: ['хвилину', 'хвилини', 'хвилин'],
    seconds: ['секунду', 'секунди', 'секунд']
}
export const getPluralWord = (type, count) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[type][ (count % 100 > 4 && count % 100 < 20)
        ? 2
        : cases[Math.min(count % 10, 5)]];
}

export const getDateAgoString = (dateInString) => {
    const createdDate = new Date(Date.parse(dateInString))
    const dateNow = new Date(Date.now())
    const dateDiffInMinutes = Math.floor((dateNow - createdDate) / (1000 * 60))
    const dateDiffInHours = Math.floor((dateNow - createdDate) / (1000 * 3600))

    let resultDate

    if(dateDiffInMinutes < 60)
        resultDate = `${dateDiffInMinutes} ${getPluralWord('minutes', dateDiffInMinutes)} тому`
    else if(dateDiffInHours < 24)
        resultDate = `${dateDiffInHours} ${getPluralWord('hours', dateDiffInHours)} тому`
    else
        resultDate = createdDate.toLocaleDateString()

    return resultDate
}