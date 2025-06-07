<template>
  <div class="layout">
    <header class="header">
      <h1 class="title">My Notes Webpage</h1>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/notes">Notes</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <slot></slot>
      <!-- Aquí se renderizan tus componentes. -->
    </main>

    <footer class="footer">
      <p>Created by [LauraMaccarone] © 2025</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: #eaf4e6; /* Fondo verde claro */
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 32px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Consistent font family */
  color: #2e7d32; /* Professional green color */
  font-style: italic; /* Italicize the text */
  font-weight: bold; /* Maintain bold style for emphasis */
  text-align: center; /* Make alignment consistent */
  margin-bottom: 15px; /* Bottom margin for spacing */
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 25px;
  margin: 0;
}

.nav-list li {
  display: inline;
}

.nav-list a {
  display: inline-block;
  font-size: 18px;
  background-color: #98c9a3; /* Verde más suave */
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-list a:hover {
  background-color: #82b388;
  transform: translateY(-2px);
}


.content {
  flex: 1;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #82b388 0%,
    #82b388 50%,
    #82b388 100%
  ); /* A vibrant gradient with multiple color stops */
  border-radius: 12px; /* A more pronounced rounded edge */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* More defined shadow for better depth */
  backdrop-filter: blur(5px); /* Optional: adds a glassy effect */
  overflow: hidden; /* Ensures content clipped properly */
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f0f5; /* General background for contrast */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.footer {
  background-color: #eaf4e6;
  color: grey;
  text-transform: bold;
  text-align: center;
  padding: 10px;
}
</style>
