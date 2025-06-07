<template>
  <h2>This is a webpage where you can save all your notes</h2>
  <h3>Here you can manage all your tasks and more! Click on Notes!</h3>
  <div
    class="home-container"
    :style="{
      backgroundImage:
        'url(https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg)',
    }"
  ></div>
</template>

<style scoped>
.home-container {
  height: 100vh; /* Full height for demonstration */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center image within the container */
  background-repeat: no-repeat; /* Do not repeat the image */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333; /* Text color for readability */
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8); /* Optional for text clarity */
}

h2, h3 {
  font-size: 20px;
  color: green;
  border-bottom: 2px solid grey; /* Use 'grey' or the color code '#808080' */
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-align: center; /* Center the text */
  font-style: italic; /* Make the text italic */
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
