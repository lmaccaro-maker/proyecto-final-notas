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
      class="note-title"
      placeholder="Nueva nota"
      v-model="title"
    />
    <button class="create-btn">+</button>
  </form>
</template>

<style scoped>

.note-form {
  display: flex; /* Uso de flex para organizar los elementos en línea */
  align-items: center; /* Alineación vertical centrada */
  margin: 20px auto; /* Centro dentro del contenedor */
  max-width: 400px; /* Ancho máximo del formulario */
  background-color: #86c095; /* Fondo consistente para mejor contraste */
  padding: 10px 20px; /* Espacio alrededor */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra leve para definición */
}

.note-title {
  flex: 1; /* Ocupa todo el espacio disponible */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc; /* Borde gris claro */
  border-radius: 5px;
  margin-right: 10px; /* Espacio entre input y botón */
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.note-title:focus {
  border-color: #7dbf93; /* Mejor color de borde cuando está enfocado */
  outline: none;
  background-color: #e4f2e1; /* Cambio de fondo en foco */
}

.create-btn {
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: #28a745; /* Verde vivo para el botón */
  border: none;
  border-radius: 50%; /* Botón redondo */
  cursor: pointer; /* Indica interactividad */
  transition: background-color 0.3s;
}

.create-btn:hover {
  background-color: #218838; /* Oscurece un poco al pasar el ratón */
}
</style>
