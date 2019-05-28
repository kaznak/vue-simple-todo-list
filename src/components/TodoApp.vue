<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
	<v-toolbar>
	  <v-toolbar-title>
            {{ title }}
	  </v-toolbar-title>
	</v-toolbar>
	<v-list>
	    <v-list-tile
	      v-for="item in todoList.array"
	      v-bind:class="{ done: item.isChecked }"
              v-bind:key="item.id"
	      v-on:click="item.isChecked = !item.isChecked">
	      {{ item.text }}
	    </v-list-tile>
	</v-list>
	<v-toolbar>
	  <v-text-field
	    v-model="newTodoField"
	    v-bind:label="placeholder"
	    v-on:keyup.enter="todoList.push({ text : newTodoField, isChecked : false }); newTodoField = '';"
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
    })
}
</script>

<style>
.done { text-decoration: line-through; }
</style>
