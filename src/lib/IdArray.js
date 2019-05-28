
export default class IdArray {
    constructor(init) {
        if(init == undefined){
            this.count = 0
            this.array = []
        } else if(Array.isArray(init)) {
            if(init.every(x => x.id == undefined)) {
                this.count = init.length
                init.forEach((e, i) => e.id = i)
                this.array = init
            } else {
                throw "item has id property."
            }
        } else {
            throw "initial value does not Array."
        }
    }
    push(item) {
        if(item.id == undefined) {
            item.id = this.count
            this.count += 1
            this.array.push(item)
            return this
        } else {
            throw "item has id property."
        }
    }
    filter(pred) {
        this.array = this.array.filter(pred)
        return this
    }
}
