<template>
  <v-app>
    <!-- <v-toolbar app> -->
    <!--   <v-toolbar-title class="headline text-uppercase"> -->
    <!--     <span>Vuetify</span> -->
    <!--     <span class="font-weight-light">MATERIAL DESIGN</span> -->
    <!--   </v-toolbar-title> -->
    <!--   <v-spacer></v-spacer> -->
    <!--   <v-btn -->
    <!--     flat -->
    <!--     href="https://github.com/vuetifyjs/vuetify/releases/latest" -->
    <!--     target="_blank" -->
    <!--   > -->
    <!--     <span class="mr-2">Latest Release</span> -->
    <!--   </v-btn> -->
    <!-- </v-toolbar> -->

    <!-- <v-content> -->
    <!--   <HelloWorld msg="Welcome to Vuetify"/> -->
    <!-- </v-content> -->

    <v-content>
      <TodoApp title="Todo List"
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
