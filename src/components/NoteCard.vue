<script setup>
import Checkbox from "./Checkbox.vue";
import DeleteButton from "./DeleteButton.vue";

const props = defineProps({
  note: Object,
  deleteNotes: Function,
});

const deleteThisNote = () => {
  props.deleteNotes(props.note.id);
};
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="note.title" />
    <div class="action-buttons">
      <Checkbox v-model="note.marked" />
      <DeleteButton :deleteNote="deleteThisNote" />
    </div>
  </article>
</template>

<style scoped>

.note-card {
  background-color: #fffae5; /* Soft yellow for a sticky note look */
  padding: 20px;
  border-radius: 5px; /* Slightly rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Light shadow for 3D effect */
  margin-bottom: 20px;
  max-width: 300px; /* Typical width restraint for sticky notes */
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e2e2e2; /* Light border to mimic note edges */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 200px; /* Increased height for a taller note */
  width: 100%;
  transform: rotate(-1deg); /* Slight rotation */
  position: relative;
}

.note-card::before {
  content: ""; /* To simulate a curl */
  position: absolutely;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: #fff; /* White for brightness */
  border-radius: 50%;
  transform: rotate(45deg); /* Rotate to give curl effect */
  border: 1px solid #e2e2e2;
  box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.1);
}

.note-card .pin {
  width: 15px;
  height: 15px;
  background-color: #db4437; /* Red pin for accent */
  border-radius: 50%;
  position: absolutely;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

.action-buttons {
  display: flex; /* Enables flexbox for alignment */
  align-items: center; /* Centers elements vertically */
  justify-content: flex-end; /* Aligns elements to the right */
  gap: 7px; /* Space between checkbox and delete button */
  width: 100%; /* Uses full width of the card */
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
.action-buttons {
  display: flex;
  width: 100%;
  align-self: flex-end;
  justify-content: flex-end;
}
</style>
