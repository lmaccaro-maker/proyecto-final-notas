<script setup>
const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "info", // Valores posibles: 'error', 'success', 'info'
  },
});
</script>

<template>
  <div :class="['alert', `alert-${type}`]">
    <h2>Alerta</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.alert {
  padding: 16px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 20px auto;
}

.alert-info {
  background-color: #e7f3fe;
  color: #31708f;
  border-left: 4px solid #31708f;
}

.alert-success {
  background-color: #dff0d8;
  color: #3c763d;
  border-left: 4px solid #3c763d;
}

.alert-error {
  background-color: #f2dede;
  color: #a94442;
  border-left: 4px solid #a94442;
}

.alert h2 {
  margin: 0;
  font-size: 20px;
  margin-right: 10px;
}

.alert p {
  margin: 0;
  flex: 1;
}
</style>
