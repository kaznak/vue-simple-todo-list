<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-list>
          <v-list-tile
            v-for="item in todoList.array"
            v-on:click="item.isChecked = !item.isChecked"
            v-bind:key="item.id"
          >
            <v-list-tile-avatar>
              <v-checkbox
                v-model="item.isChecked"
                v-bind:value="item.isChecked"
              ></v-checkbox>
            </v-list-tile-avatar>
            <v-list-tile-content
              v-bind:class="{ done: item.isChecked }">
              {{ item.text }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-toolbar>
          <v-text-field
            v-model="newTodoField"
            v-on:keyup.enter="pushTodo()"
            label="Enter todo and press enter. "
            required >
          </v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            v-on:click="todoList.filter(x => ! x.isChecked)">
            delete checked
          </v-btn>
        </v-toolbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: [
    "todoList", // lib/IdArray
  ],
  data: () => ({
    newTodoField : ""
  }),
  methods : {
    pushTodo : function() {
      if(this.newTodoField.trim()!=''){
        this.todoList.push({
          text : this.newTodoField,
          isChecked : false
        })
        this.newTodoField = ''
      }
    }
  }
}
</script>

<style>
.done { text-decoration: line-through; }
</style>
