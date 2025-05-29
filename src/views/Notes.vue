<script setup>
import CreateNote from "../components/CreateNote.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();
</script>

<template>
  <HeaderComponent />

  <section id="notes-page">
    <h2>Notas</h2>
    <ul class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h2>No hay nada que mostrar, crea tu primera nota</h2>
      </li>
    </ul>
  </section>
</template>

<style>
/* Estilo general para la sección de notas */
#notes-page {
  max-width: 800px; /* Limitar el ancho máximo de la sección para un mejor enfoque de lectura */
  margin: 0 auto; /* Centrar la sección en la página */
  padding: 20px; /* Añadir espaciado interno */
  background-color: #1a808c; /* Fondo gris claro para contraste */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombras para profundidad */
}

/* Título de la sección */
h2 {
  font-size: 36px; /* Aumentar tamaño de fuente del título */
  color: #333; /* Texto oscuro para contraste */
  text-align: center; /* Centrar el título */
  margin-bottom: 20px; /* Espaciado debajo del título */
}

/* Listado de notas */
.note-list {
  list-style-type: none; /* Remover viñetas predeterminadas */
  padding: 0; /* Remover relleno por defecto */
}

/* Elementos de lista */
.note-list li {
  font-size: 18px; /* Tamaño de texto cómodo para leer */
  color: #555; /* Texto gris oscuro */
  background-color: #fff; /* Fondo blanco para cada nota */
  padding: 15px; /* Espaciado interno */
  margin-bottom: 10px; /* Separado entre notas */
  border-radius: 5px; /* Bordes ligeramente redondeados */
  transition: background-color 0.3s ease; /* Transición suave */
}

/* Efecto hover para cada nota */
.note-list li:hover {
  background-color: #e3e3e3; /* Sobrescribir fondo color en hover */
}

.empty-msg {
  text-align: center;
  font-size: 4px;
  font-family: 4px;
}
</style>
