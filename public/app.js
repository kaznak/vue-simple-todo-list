
var app = new Vue({
    el: '#app',
    data: {
        count : 3,
        todos: [
            { id : 0, isChecked : true,
              text : "Pick up Paycheck" },
            { id : 1, isChecked : false,
              text : "Cash Paycheck" },
            { id : 2, isChecked : false,
              text : "Get Milk" }
        ],
        newTodoField : ""
    },
    methods : {
        addTodo : function() {
            this.count += 1
            this.todos.push({
                id : this.count,
                isChecked : false,
                text : this.newTodoField
            })
            this.newTodoField = ""
        },
        flipCheck : function(item) {
            item.isChecked = ! item.isChecked
        },
        cleanChecked : function() {
            this.todos = this.todos.filter(todo => ! todo.isChecked)
        }
    }
})
