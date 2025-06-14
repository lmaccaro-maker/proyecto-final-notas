<template>
  <div id="delete-wrapper" @click="deleteFunction">
    <div class="cap"></div>
    <div class="inner-delete">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  deleteNote: {
    type: Function,
  },
});
const deleteFunction = () => {
  props.deleteNote();
};
</script>

<style scoped>
#delete-wrapper {
  max-width: 30px; /* Reduced size */
  width: 100%;
  cursor: pointer;
}

.inner-delete {
  border-color: #5a4a4a;
  border-radius: 0 0 3px 3px; /* Slight reduction in radius */
  border-style: solid;
  border-width: 0 0.6px 0.6px 0.6px; /* Thinner border */
  height: 20px; /* Smaller height */
  margin: 0 auto;
  max-width: 20px; /* Reduced width */
  padding: 1.5px 0; /* Less padding */
  text-align: center;
}

.inner-delete span {
  background-color: #5a4a4a;
  border-radius: 50%;
  display: inline-block;
  height: 100%;
  margin: 0 0.4px; /* Narrower margins */
  width: 1.2px; /* Thinner width */
}

#delete-wrapper .cap {
  border-radius: 1.5px; /* Smaller border radius */
  border: 0.6px solid #5a4a4a;
  height: 6px; /* Smaller height */
  margin: 0 auto;
  max-width: 30px; /* Reduced max width */
  position: relative;
  background-color: #ffffff;
  transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s ease-in-out;
  transform-origin: top center;
}

#delete-wrapper .cap::before {
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 0.6px solid #5a4a4a; /* Thinner border */
  content: "";
  height: 3px; /* Smaller height */
  left: 8px; /* Adjusted based on new width */
  position: absolute;
  top: -6px; /* Vertical position adjustment */
  width: 10px; /* Reduced width */
}

#delete-wrapper:hover .cap {
  transform: rotate(-25deg); /* Adjusted angle */
  background-color: #f0f0f0; /* Light background change */
}
</style>
