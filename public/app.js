
function Todo(text, isChecked) {
    this.text = text
    this.isChecked = isChecked
    this.flipCheck = function() {
        this.isChecked = ! this.isChecked
        return this
    }
    return this
}

function TodoList(init) {
    if(init == undefined) {
        this.count = 0
        this.todoList = []
    } else {
        this.count = init.length
        this.todoList = init.map(function(e,i){
            e.id = i
            return e
        })
    }
    this.addTodo = function(text, checked) {
        this.count += 1
        var todo = new Todo(text, checked)
        todo.id = this.count
        this.todoList.push(todo)
        return this
    }
    this.cleanChecked = function() {
        this.todoList = this.todoList.filter(todo => ! todo.isChecked)
        return this
    }
    return this
}

//////////////////////////////////////////////////////////////////////////

var todoList = new TodoList([
    new Todo("Pick up Paycheck", true),
    new Todo("Cash Paycheck"),
    new Todo("Get Milk"),
])

var app = new Vue({
    el: '#app',
    data: {
        todoList : todoList,
        newTodoField : ""
    },
})
