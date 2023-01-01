import {getDateAgoString, getPluralWord} from "./dateAgo";

describe('verify if getPluralWord works properly', () => {
    const testInputs = [
        {count: 0, word: 'годин'},
        {count: 1, word: 'годину'},
        {count: 2, word: 'години'},
        {count: 7, word: 'годин'},
        {count: 21, word: 'годину'}]

    test.each(testInputs)('should return %s when hours equal %i', ({word, count}) => {
            expect(getPluralWord('hours', count)).toEqual(word)
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