<script setup>
defineProps({
  note: Object,
});
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="note.title" />
    <input type="checkbox" v-model="note.marked" />
  </article>
</template>

<style scoped>
.note-card {
  background-color: #eaf4e6; /* Verde claro */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  margin-bottom: 20px;
  max-width: 400px;
  margin: 10px auto;
  border: 1px solid #c5dbc8; /* Borde coordinado en verde */
  cursor: pointer;
}

.note-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.note-card:active {
  transform: translateY(2px);
}

.card-title {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #98c1a9; /* Borde verde sólido */
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  margin-bottom: 10px;
}

.card-title:focus {
  border-color: #609b76; /* Verde más oscuro al focalizarse */
  outline: none;
  background-color: #dfeee1; /* Ligero fondo diferente en focus */
}

input[type="checkbox"] {
  transform: scale(1.2); 
  margin-left: 10px; 
  cursor: pointer; 
  background-color: #eaf4e6; /* Fondo verde claro */
}
</style>