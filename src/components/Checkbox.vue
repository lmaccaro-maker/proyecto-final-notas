<template>
  <div class="container">
    <input
      type="checkbox"
      id="check"
      :checked="modelValue"
      @change="emitChange"
    />
    <label for="check">
      <div class="mark"></div>
    </label>
  </div>
</template>



<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);
function emitChange(event) {
  emit("update:modelValue", event.target.checked);
}
</script>

<style scoped>
label {
  display: inline-block;
  cursor: pointer;
  margin: 0 calc(100px * 0.15);
  width: 30px;
  height: 30px;
  border: calc(30px * 0.125) solid #fff;
  border-radius: 12.5%;
  transition: border-color 0.4s ease-out, box-shadow 0.4s ease-out;
}

label:hover {
  border-color: #466fb3;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Adds a subtle shadow on hover */
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  left: -1000px;
}

.mark {
  position: relative;
  right: calc(30px * -0.5);
  top: calc(30px * -0.25);
  width: calc(30px * 0.24);
  height: calc(30px * 0.74);
  border-right: calc(30px * 0.25) solid #2e7d32; /* Dark green for visibility */
  border-bottom: calc(30px * 0.25) solid #2e7d32; 
  transform: rotate(45deg) scale(0);
  opacity: 0;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.5);
}

.mark:before {
  content: "";
  position: absolute;
  left: calc(30px * -0.125);
  bottom: calc(30px * -0.25);
  border: calc(30px * 0.125) solid #2e7d32; /* Consistent with check */
  border-radius: 50%;
}

.mark:after {
  content: "";
  position: absolute;
  right: calc(30px * -0.25);
  top: calc(30px * -0.125);
  border: calc(30px * 0.125) solid #2e7d32; /* Consistent with check */
  border-radius: 50%;
}

input[type="checkbox"]:checked + label .mark {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

input[type="checkbox"]:focus + label {
  animation: 400ms linear cb-pop;
  box-shadow: 0 0 5px #2e7d32; /* Highlight with focused shadow */
}

@keyframes cb-pop {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>