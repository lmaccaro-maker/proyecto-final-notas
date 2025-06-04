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
  background-color: #f0f4f8; /* Fondo azul muy claro para una atmósfera acogedora */
  padding: 30px; /* Espacio interno amplio para contenido */
  border-radius: 12px; /* Bordes suavizados para un acabado elegante */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12); /* Sombra más perceptible para profundidad */
  margin: 40px auto; /* Margen superior para separación del encabezado */
  max-width: 900px; /* Ancho máximo para uso eficiente del espacio */
}

h2 {
  font-size: 25px; /* Título prominente */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2e7d32; /* Cambio a un verde profesional */
  font-style: italic; /* Estilo en cursiva */
  text-align: center; /* Texto centrado */
  margin-bottom: 25px; /* Espaciado inferior */
}

.note-list {
  list-style: none; /* Sin puntos de lista */
  padding: 0; /* Ningún relleno interno */
  margin: 0; /* Márgenes afuera */
  display: flex;
  flex-wrap: wrap; /* Ajustes automáticos a filas múltiples */
  gap: 24px; /* Espacio consistente entre notas */
  justify-content: center; /* Centrar el contenido */
}

.note-list li {
  flex: 1 1 280px; /* Ajustar automáticamente para adaptarse a diferentes tamaños de pantalla */
}

.empty-msg {
  text-align: center;
  font-size: 20px;
  color: #555; /* Color gris oscuro */
  margin: 20px 0;
}

.create-note-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: rgb(197, 219, 200); /* Verde vibrante */
  color: white;
  border-radius: 8px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.create-note-plus:hover {
  background-color: rgb(
    197,
    219,
    200
  ); /* Verde ligeramente más oscuro en hover */
}
</style>
