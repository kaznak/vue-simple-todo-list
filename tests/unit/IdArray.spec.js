import IdArray from '@/lib/IdArray.js'

describe('Idarray.js', () => {
    describe('new', () => {
        const init = [
            { data : 0 },
            { data : 1 },
            { data : 2 },
        ]
        const iarrays = [
            new IdArray(),
            new IdArray(init)
        ]
        it('without array returns new IdArray of legth zero', () => {
            expect(iarrays[0].count).toBe(0)
        })
        it('with array returns new IdArray of same legth the argument array', () => {
            expect(iarrays[1].count).toBe(init.length)
        })
    })
})
