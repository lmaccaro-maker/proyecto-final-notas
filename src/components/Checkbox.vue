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
  margin: 0 calc(35px * 0.15);
  width: 20px; /* Adjusted width to match trash can size */
  height: 20px; /* Adjusted height to match trash can size */
  border: calc(20px * 0.125) solid #fff; /* Proportional border size */
  border-radius: 10%; /* Adjusted radius for smaller checkbox */
  transition: border-color 0.4s ease-out, box-shadow 0.4s ease-out;
}

label:hover {
  border-color: #466fb3;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); /* Subtle shadow scaled to match size */
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  left: -1000px;
}

.mark {
  position: relative;
  right: calc(20px * -0.5);
  top: calc(20px * -0.25);
  width: calc(20px * 0.24);
  height: calc(20px * 0.74);
  border-right: calc(20px * 0.25) solid #2e7d32; /* Scaled check visibility */
  border-bottom: calc(20px * 0.25) solid #2e7d32;
  transform: rotate(45deg) scale(0);
  opacity: 0;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.5);
}

.mark:before {
  content: "";
  position: absolute;
  left: calc(20px * -0.125);
  bottom: calc(20px * -0.25);
  border: calc(20px * 0.125) solid #2e7d32;
  border-radius: 50%;
}

.mark:after {
  content: "";
  position: absolute;
  right: calc(20px * -0.25);
  top: calc(20px * -0.125);
  border: calc(20px * 0.125) solid #2e7d32;
  border-radius: 50%;
}

input[type="checkbox"]:checked + label .mark {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

input[type="checkbox"]:focus + label {
  animation: 400ms linear cb-pop;
  box-shadow: 0 0 3px #2e7d32; /* Focused shadow adapted for smaller checkbox */
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