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
  border-radius: 0 0 4px 4px;
  border-style: solid;
  border-width: 0 0.8px 0.8px 0.8px;
  height: 25px;
  margin: 0 auto;
  max-width: 25px;
  padding: 2px 0;
  text-align: center;
}

.inner-delete span {
  background-color: #5a4a4a;
  border-radius: 50%;
  display: inline-block;
  height: 100%;
  margin: 0 0.5px;
  width: 1.5px;
}

#delete-wrapper .cap {
  border-radius: 2px;
  border: 0.8px solid #5a4a4a;
  height: 8px;
  margin: 0 auto;
  max-width: 35px;
  position: relative;
  background-color: #ffffff;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), background-color 0.3s ease-in-out;
  transform-origin: top center;
}

#delete-wrapper .cap::before {
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 0.8px solid #5a4a4a;
  content: "";
  height: 4px;
  left: 10px;
  position: absolute;
  top: -8px;
  width: 13px;
}

#delete-wrapper:hover .cap {
  transform: rotate(-30deg); /* Adjust angle for a more realistic lid opening */
  background-color: #f0f0f0; /* Light background change for visual depth */
}
</style>