<template>
  <div class="layout">
    <header class="header">
      <h1 class="title">My Notes App</h1>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/notes">Notes</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <slot></slot> <!-- Aquí se renderizan tus componentes. -->
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
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
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
  background-color: #ffffff;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;

}
</style>