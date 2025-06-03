<script setup>
import Checkbox from './Checkbox.vue';
import DeleteButton from './DeleteButton.vue';

const props = defineProps({
  note: Object,
  deleteNotes: Function,
});

const deleteThisNote = () => {
  props.deleteNotes(props.note.id);
};
</script>

<template>
  <article class="note-card green">
    <input type="text" class="card-title" v-model="note.title" />
    <Checkbox v-model="note.marked"/>
    <!-- <button v-if="deleteNotes" @click="deleteThisNote">Delete</button> -->
    <DeleteButton :deleteNote="deleteThisNote" />
  </article>
</template>

<style scoped>
.note-card {
  background-color: #eaf4e6; /* Verde claro para fondo */
  padding: 20px;
  border-radius: 12px; /* Bordes redondeados para suavidad visual */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  margin-bottom: 20px; /* Espacio inferior entre tarjetas */
  max-width: 400px;
  margin: 10px auto;
  border: 1px solid #c5dbc8; /* Borde coordinado */
  cursor: pointer;
  display: flex;
  flex-direction: column; /* Alinear verticalmente los elementos */
  gap: 10px; /* Espaciado entre los elementos dentro de la tarjeta */
}

.card-title {
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

.card-title:focus {
  outline: none;
}

input[type="checkbox"] {
  transform: scale(1.2); /* Agrandar checkbox */
  cursor: pointer;
  margin-bottom: 10px;
}

button {
  background-color: #579f78; /* Rojo para botón de eliminar */
  color: black;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  align-self: flex-end; /* Coloca el botón en el extremo inferior derecho */
}

button:hover {
  background-color: #579f78; /* Oscurece al pasar el ratón */
}

button:active {
  transform: translateY(2px); /* Efecto de "presionado" al hacer clic */
}
</style>
