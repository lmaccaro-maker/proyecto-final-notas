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
  <div class="form-container">
    <form class="note-form" @submit.prevent="handleSubmit">
      <input
        type="text"
        class="note-input"
        placeholder="New note"
        v-model="title"
      />
      <button class="create-btn">+</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
}
.note-form {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  background-color: #eaf4e6;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.note-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: grey;
  border-radius: 4px;
  outline: none;
}

.create-btn {
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: rgb(197, 219, 200);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin-left: auto;
}

.create-btn:hover {
  background-color: #218838;
}
</style>
