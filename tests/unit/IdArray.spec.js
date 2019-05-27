import IdArray from '@/lib/IdArray.js'

describe('Idarray.js', () => {
    const iarrays = [
        new IdArray(),
        new IdArray([
            { data : 0 },
            { data : 1 },
            { data : 2 }
        ]),
    ]
    describe('new', () => {
        it('returns new IdArray', () => {
            expect(iarrays[0].count).toBe(0)
            expect(iarrays[0].array).toEqual([])
            expect(iarrays[1].count).toBe(3)
            expect(iarrays[1].array).toEqual([
                { id : 0, data : 0 },
                { id : 1, data : 1 },
                { id : 2, data : 2 },
            ])
        })
        it('does not return new IdArray', () => {
            expect(() => new IdArray(1)).toThrow(/.*/)
            expect(() => new IdArray([
                { id : 0, data : 0 },
            ])).toThrow(/.*/)
        })
    })
    describe('#push', () => {
        it('returns pushd IdArray', () => {
            iarrays[0].push({ data : 3 })
            expect(iarrays[0].count).toBe(1)
            expect(iarrays[0].array).toEqual([
                { id: 0, data : 3 }
            ])

            iarrays[1].push({ data : 3 })
            expect(iarrays[1].count).toBe(4)
            expect(iarrays[1].array).toEqual([
                { id : 0, data : 0 },
                { id : 1, data : 1 },
                { id : 2, data : 2 },
                { id : 3, data : 3 }
            ])
        })
    })
    describe('#filter', () => {
        it('returns pred IdArray', () => {
            iarrays[0].filter(({ data : d }) => d % 2 == 1)
            expect(iarrays[0].count).toBe(1)
            expect(iarrays[0].array).toEqual([
                { id: 0, data : 3 }
            ])

            iarrays[1].filter(({ data : d }) => d % 2 == 1)
            expect(iarrays[1].count).toBe(4)
            expect(iarrays[1].array.length).toBe(2)
            expect(iarrays[1].array).toEqual([
                { data: 1, id: 1 },
                { data: 3, id: 3 }
            ])
        })
    })
})
