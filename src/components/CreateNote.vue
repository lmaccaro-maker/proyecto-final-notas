<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();

const handleSubmit = () => {
  noteStore.addNote(title.value);
  title.value = "";
};

const title = ref("");
</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="note-input"
      placeholder="New note"
      v-model="title"
    />
    <button class="create-btn">+</button>
  </form>
</template>

<style scoped>

.note-form {
  display: flex; /* Use flex to organize inline elements */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Centrally align all content horizontally */
  max-width: 400px; /* Maximum width of the form */
  background-color: #eaf4e6; /* Consistent background for contrast */
  padding: 10px; /* Uniform padding */
  border-radius: 8px; /* Rounded borders */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
  width: 100%;
}

.note-input {
  flex-grow: 1; /* Let it use all the remaining space */
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: grey;
  border-radius: 4px;
  box-shadow: none;
  outline: none; /* Removes default focus border */
}

.note-input:focus {
  outline: none; /* Keeps no visible rectangle on focus */
}

.create-btn {
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: rgb(197, 219, 200); /* Bright green for the button */
  border: none;
  border-radius: 50%; /* Round button */
  cursor: pointer; /* Indicates interactiveness */
  transition: background-color 0.3s;
  outline: none;
  flex-shrink: 0; /* Prevent it from shrinking to make room */
  margin-left: auto; /* Automatically space it to the right edge */
}

.create-btn:focus {
  outline: none;
}

.create-btn:hover {
  background-color: #218838; /* Darkens slightly on hover */
}
</style>
