<template>
<v-app>
  <v-toolbar>
    <v-toolbar-title>
      <span>Todo List</span>
    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <TodoApp
      v-bind:todo-list="todoList"
      placeholder="Enter todo and press enter. "/>
  </v-content>
</v-app>
</template>

<script>
import TodoApp from './components/TodoApp'
import IdArray from './lib/IdArray'

export default {
  name: 'App',
  components: {
    TodoApp
  },
  data : () => ({
    todoList : new IdArray([
      { text : "Pick up Paycheck", isChecked : true },
      { text : "Cash Paycheck", isChecked : false },
      { text : "Get Milk", isChecked : false },
    ])
  })
}
</script>
