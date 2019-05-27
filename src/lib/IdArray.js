
export default class IdArray {
    constructor(init) {
        // assert(init.every(x => x.id == undefined))
        if(init == undefined){
            this.count = 0
            this.array = []
        } else {
            this.count = init.length
            init.forEach((e, i) => e.id = i)
            this.array = init
        }
    }
    push(item) {
        // assert(item.id == undefined)
        this.count += 1
        item.id = this.count
        this.array.push(item)
        return this
    }
    filter(prop) {
        this.array = this.array.filter(prop)
        return this
    }
}
