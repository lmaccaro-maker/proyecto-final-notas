<script setup></script>

<template>
  <div class="home-container">
    <!-- Contents of the home page -->
    <h2>This is a webpage where you can save all your notes</h2>
  </div>
</template>

<style scoped>
.home-container {
  height: 100vh; /* Full height for demonstration */
  background-image: url("https://img.freepik.com/foto-gratis/apilado-tarjeta-verde-telon-fondo-abstracto_23-2147981589.jpg");
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center image within the container */
  background-repeat: no-repeat; /* Do not repeat the image */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333; /* Text color for readability */
}

/* Header Styles */
h2 {
  font-size: 20px;
  color: #grey;
  border-bottom: 2px solid #grey;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

/* Intro Section Styling */
.notes-intro {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notes-intro p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
}

/* Button Styling */
.button {
  display: inline-block;
  background-color: #66bb6a;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #558b2f;
}
</style>
