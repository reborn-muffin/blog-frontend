import {getDateAgoString, getPluralWord} from "./dateAgo";

describe('verify if getPluralWord works properly', () => {
    const hoursInputs = [
        {count: 0, word: 'годин'},
        {count: 1, word: 'годину'},
        {count: 2, word: 'години'},
        {count: 7, word: 'годин'},
        {count: 21, word: 'годину'}]

    const minutesInputs = [
        {count: 0, word: 'хвилин'},
        {count: 1, word: 'хвилину'},
        {count: 2, word: 'хвилини'},
        {count: 7, word: 'хвилин'},
        {count: 21, word: 'хвилину'}]

    const secondsInputs = [
        {count: 0, word: 'секунд'},
        {count: 1, word: 'секунду'},
        {count: 2, word: 'секунди'},
        {count: 7, word: 'секунд'},
        {count: 21, word: 'секунду'}]

    // TODO fix tests
    test.each(hoursInputs)('should return %s when hours equal %i', ({word, count}) => {
            expect(getPluralWord('hours', count)).toEqual(word)
    })

    test.each(minutesInputs)('should return %s when minutes equal %i', ({word, count}) => {
        expect(getPluralWord('minutes', count)).toEqual(word)
    })

    test.each(secondsInputs)('should return %s when seconds equal %i', ({word, count}) => {
        expect(getPluralWord('seconds', count)).toEqual(word)
    })
})

describe('verify if getDateAgoString works properly', () => {
    it('should return "1 годину тому" when date greater at 1 hour then current date', () => {
        const createdDate = new Date(Date.now())
        createdDate.setHours(createdDate.getHours() - 1)
        expect(getDateAgoString(createdDate)).toEqual('1 годину тому')
    })
    it('should return "30 хвилин тому" when date greater at 30 minutes then current date', () => {
        const createdDate = new Date(Date.now())
        createdDate.setMinutes(createdDate.getMinutes() - 30)
        expect(getDateAgoString(createdDate)).toEqual('30 хвилин тому')
    })
    it('should return just created date when date greater at 24 hour then current date', () => {
        const createdDate = new Date(Date.now())
        createdDate.setDate(createdDate.getDate() - 1)
        expect(getDateAgoString(createdDate)).toEqual(createdDate.toLocaleDateString())
    })
    it('should occur an error because the creation date has not yet arrived', () => {
        const createdDate = new Date(Date.now())
        createdDate.setDate(createdDate.getDate() + 1)

        let errorMessage

        try{
            getDateAgoString(createdDate);
        }
        catch (error){
            errorMessage = error.message
        }

        expect(errorMessage).toEqual('Created date is invalid')
    })
})