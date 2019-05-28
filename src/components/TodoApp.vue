<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-toolbar>
	<v-toolbar-title>
          {{ title }}
	</v-toolbar-title>
      </v-toolbar>
      <v-list>
	<v-list-tile
	  v-for="item in todoList.array"
	  v-on:click="item.isChecked = !item.isChecked"
          v-bind:key="item.id"
	  >
	  <span v-bind:class="{ done: item.isChecked }">
	    {{ item.text }}
	  </span>
	</v-list-tile>
      </v-list>
      <v-toolbar>
	<v-text-field
	  v-model="newTodoField"
	  v-bind:label="placeholder"
	  v-on:keyup.enter="pushTodo(newTodoField)"
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
	"title",
	"todoList", // lib/IdArray
	"placeholder",
    ],
    data: () => ({
	newTodoField : ""
    }),
    methods : {
	pushTodo : function(text) {
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
