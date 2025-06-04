<script setup>

</script>

<template>
  <h2>Notes</h2>
  <h3> Here you can write all your notes</h3>
</template>

<style scoped>
/* Global style reset and background */
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #eaf4e6; /* Light green background for consistency */
  color: #333;
}

/* Container for page content */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

/* Header Styles */
h2 {
  font-size: 2.5rem;
  color: #2e7d32; /* Rich green */
  border-bottom: 2px solid #2e7d32;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.5rem;
  color: #2e7d32;
  margin-bottom: 20px;
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