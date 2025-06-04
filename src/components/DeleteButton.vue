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
        type: Function
    }
})
const deleteFunction = () => {
    props.deleteNote()
}
</script>

<style scoped>
#delete-wrapper {
  max-width: 35px; /* Reduce size slightly */
  width: 100%;
  cursor: pointer;
}

.inner-delete {
  border-color: #5a4a4a;
  border-radius: 0 0 4px 4px; /* Adjust border radius proportionally */
  border-style: solid;
  border-width: 0 0.8px 0.8px 0.8px; /* Adjust border width */
  height: 25px; /* Reduce height */
  margin: 0 auto;
  max-width: 25px; /* Adjust the overall width */
  padding: 2px 0; /* Reduce padding slightly */
  text-align: center;
}

.inner-delete span {
  background-color: #5a4a4a;
  border-radius: 50%;
  display: inline-block;
  height: 100%;
  margin: 0 0.5px; /* Narrow down margin */
  width: 1.5px; /* Adjust width for smaller size */
}

#delete-wrapper .cap {
  border-radius: 2px;
  border: 0.8px solid #5a4a4a; /* Reduce border width */
  height: 8px; /* Lower height */
  margin: 0 auto;
  max-width: 35px; /* Width adjustment */
  position: relative;
  background-color: #ffffff;
  transition: 0.2s cubic-bezier(0.61, -0.01, 0.49, 1.06) all;
  transform-origin: center;
}

#delete-wrapper .cap::before {
  background-color: #ffffff;
  border-top-left-radius: 20px; /* Smaller radius */
  border-top-right-radius: 20px; /* Consistent with above */
  border: 0.8px solid #5a4a4a; /* Border adjustment */
  content: "";
  height: 4px; /* Reduced height */
  left: 10px; /* Adjust based on new width */
  position: absolute;
  top: -8px; /* Vertical position adjustment */
  width: 13px; /* Reduce width */
}

#delete-wrapper:hover .cap {
  transform: rotate(-45deg) scale(0.45); /* Slightly smaller scale */
  transition: 0.2s cubic-bezier(0.61, -0.01, 0.49, 1.06) all;
}
</style>