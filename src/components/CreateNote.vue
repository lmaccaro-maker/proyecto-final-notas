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
  display: flex; /* Uso de flex para organizar los elementos en línea */
  align-items: center; /* Alineación vertical centrada */
  max-width: 400px; /* Ancho máximo del formulario */
  background-color: #eaf4e6;/* Fondo consistente para mejor contraste */
  padding: 10px 0px; /* Espacio alrededor */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  width: 100%;
}

.note-input {
  flex: 1; /* Ocupa todo el espacio disponible */
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border-color: transparent;
  color: grey;
  box-shadow: none;
  border: none;
  outline: none; /* Elimina el borde de enfoque por defecto */
}

.note-input:focus {
  outline: none; /* Asegura que no haya un rectángulo visible al enfocar */
}

.create-btn {
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: rgb(197, 219, 200); /* Verde vivo para el botón */
  border: none;
  border-radius: 50%; /* Botón redondo */
  cursor: pointer; /* Indica interactividad */
  transition: background-color 0.3s;
  outline: none;
}

.create-btn:focus {
  outline: none;
}

.create-btn:hover {
  background-color: #218838; /* Oscurece un poco al pasar el ratón */
}
</style>
