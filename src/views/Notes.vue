<script setup>
import CreateNote from "../components/CreateNote.vue";
import NoteCard from "../components/NoteCard.vue";
import Loader from "../components/Loader.vue";
import Alert from "../components/Alert.vue";

import { useNoteStore } from "../stores/note";
// import { useApiNoteStore } from "../stores/apiNote";

const noteStore = useNoteStore();
// const noteStore = useApiNoteStore();
</script>

<template>
  <section id="notes-page">
    <h2>Add your notes</h2>
    <CreateNote v-if="!noteStore.loading && !noteStore.error" />
    <div v-if="noteStore.loading">
      <loader />
    </div>
    <div v-else-if="noteStore.error">
      <alert message="Algo ha salido mal" type="error" />
    </div>
    <ul v-else class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note" :deleteNotes="noteStore.deleteNotes"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h2>Nothing to display, create your first note</h2>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#notes-page {
  background-color: #eaf4e6; /* Uniform light green background */
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow to add depth */
  margin: 40px auto;
  max-width: 900px;
}

h2 {
  font-size: 20px;
  color: green;
  border-bottom: 2px solid grey; /* Use 'grey' or the color code '#808080' */
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-align: center; /* Center the text */
  font-style: italic; /* Make the text italic */
}

.note-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.note-list li {
  flex: 1 1 280px;
}

.empty-msg {
  text-align: center;
  font-size: 20px;
  color: #2e7d32; /* Harmonize with the green theme */
  margin: 20px 0;
}

.create-note-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #c5dbc8; /* Consistent light green */
  color: white;
  border-radius: 8px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.create-note-plus:hover {
  background-color: #adcbb3; /* Slightly darker green on hover */
}
</style>
