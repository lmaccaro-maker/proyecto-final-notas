<script setup></script>

<template>
  <header class="header">
    <h1 class="title">Notes Page</h1>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/notes">Notes</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #eaf4e6; /* Fondo verde muy claro */
  box-shadow: 0 2px 4px rgba(106, 19, 19, 0.1);
  color: #333;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px; /* Espacio debajo del título para separación */
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px; /* Espaciado equitativo entre elementos */
  padding: 0;
  margin: 0;
}

.nav-list li {
  display: inline; /* Asegura que los elementos estén en línea */
}

.nav-list a {
  display: inline-block; /* Para permitir padding */
  font-size: 18px;
  background-color: #98c9a3; /* Verde más suave */
  color: #333;
  text-decoration: none;
  padding: 10px 20px; /* Padding adecuado para parecer un botón */
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-list a:hover {
  background-color: #82b388; /* Un poco más oscuro para hover */
  transform: translateY(-2px);
}
</style>
