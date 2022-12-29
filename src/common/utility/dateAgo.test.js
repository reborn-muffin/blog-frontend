import {getDateAgoString, getPluralWord} from "./dateAgo";

describe('verify if getPluralWord works properly', () => {
    it('should return "годин" when hours equal 0', () => {
        expect(getPluralWord('hours', 0)).toEqual('годин')
    })
    it('should return "годину" when hours equal 1', () => {
        expect(getPluralWord('hours', 1)).toEqual('годину')
    })
    it('should return "години" when hours equal 2', () => {
        expect(getPluralWord('hours', 2)).toEqual('години')
    })
    it('should return "годин" when hours equal 7', () => {
        expect(getPluralWord('hours', 7)).toEqual('годин')
    })
    it('should return "годину" when hours equal 21', () => {
        expect(getPluralWord('hours', 21)).toEqual('годину')
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
})