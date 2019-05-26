
function Todo(text, isChecked) {
    this.text = text
    this.isChecked = isChecked ? true : false
    this.flipCheck = function() {
        this.isChecked = ! this.isChecked
        return this
    }
    return this
}

function TodoList(init) {
    // init.filter(x => x.id != undefined)

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
    // TODO addTodo should take contents item.
    this.add = function(item) {
        this.count += 1
        item.id = this.count
        this.todoList.push(item)
        return this
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

var todoList = {
    props : ['todoList'],
    template: '<ul><li v-for="item in todoList.todoList" v-bind:key="item.id" v-on:click="item.flipCheck()"><p v-bind:class="{ done: item.isChecked }">{{ item.text }}</p></li></ul>',
}

var inputTodo = {
    props : ['todoList','placeholder'],
    data : function() { return {
        newTodoField : "",
    } },
    template: '<input type="text" v-bind:placeholder="placeholder" v-model="newTodoField" v-on:keyup.enter="addTodo()" />',
    methods : {
        addTodo : function() {
            this.todoList.addTodo(this.newTodoField)
            this.newTodoField = ""
        }
    }
}

var todoApp = {
    components : {
        'todo-list' : todoList,
        'input-todo' : inputTodo,
    },
    props : ["title", "todoList"],
    template : '<div class="todo-app"><h1>{{ title }}</h1><todo-list v-bind:todo-list="todoList"></todo-list><input-todo v-bind:todo-list="todoList" placeholder="Enter todo and press enter. "></input-todo><button v-on:click="todoList.cleanChecked()">delete checked</button></div>',
}

//////////////////////////////////////////////////////////////////////////

var app = new Vue({
    el: '#app',
    components : {
        'todo-app' : todoApp,
    },
    data: {
        todoList : new TodoList([
            new Todo("Pick up Paycheck", true),
            new Todo("Cash Paycheck"),
            new Todo("Get Milk"),
        ]),
        newTodoField : ""
    },
})
