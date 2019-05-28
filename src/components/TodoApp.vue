<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>
          {{ title }}
        </h1>
      </v-flex>
      <v-flex>
 <ul>
     <li v-for="item in todoList.array" v-bind:key="item.id"
  v-on:click="item.isChecked = !item.isChecked">
       <p v-bind:class="{ done: item.isChecked }">{{ item.text }}</p>
     </li>
 </ul>
 <input type="text"
        v-bind:placeholder="placeholder"
        v-model="newTodoField"
        v-on:keyup.enter="todoList.push({ text : newTodoField, isChecked : false });newTodoField = '';" />
 <button v-on:click="todoList.filter(x => ! x.isChecked)">
   delete checked
 </button>
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
