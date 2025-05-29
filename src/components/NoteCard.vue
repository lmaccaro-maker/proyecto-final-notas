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

<style>
#notes-page {
  background-color: #198460; /* Fondo verde claro */
  padding: 30px; /* Espaciado interno amplio */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  margin: 20px auto; /* Centro de la página */
  max-width: 800px; /* Ancho máximo */
  display: flex; /* Usar flexbox para alinear contenido */
  flex-direction: column; /* Orientación en columna */
  align-items: center; /* Alinea horizontalmente al centro */
}

h2 {
  font-size: 28px; /* Tamaño de la letra del encabezado */
  color: #333; /* Texto oscuro para contraste */
  text-align: center; /* Centración del texto */
  margin-bottom: 20px; /* Espaciado debajo del encabezado */
}

.note-list {
  list-style-type: none; /* Sin viñetas predeterminadas */
  padding: 0; /* Remover padding interno */
  margin: 0; /* Remover márgenes */
  width: 100%; /* Adaptar al ancho del contenedor */
  display: flex; /* Usar flex para organizar elementos */
  flex-direction: column; /* Mantener orientación vertical */
  align-items: center; /* Centrar individualmente */
}

.note-list li {
  margin-bottom: 15px; /* Espacio entre notas */
  width: 100%; /* Asegura que las notas tengan el mismo tamaño */
  max-width: 400px; /* Limita ancho de cada nota para legibilidad */
}
</style>
