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
  max-width: 40px; /* Tamaño reducido */
  width: 100%;
  cursor: pointer;
}

.inner-delete {
  border-color: #5a4a4a;
  border-radius: 0 0 5px 5px; /* Proporcional al nuevo tamaño */
  border-style: solid;
  border-width: 0 1px 1px 1px; /* Ajuste del grosor del borde */
  height: 30px; /* Proporcional al nuevo tamaño */
  margin: 0 auto;
  max-width: 30px; /* Ajustado al nuevo porcentaje */
  padding: 3px 0; /* Proporcional al nuevo tamaño */
  text-align: center;
}

.inner-delete span {
  background-color: #5a4a4a;
  border-radius: 50%;
  display: inline-block;
  height: 100%;
  margin: 0 1px; /* Ajuste del margen */
  width: 2px; /* Ajuste de ancho */
}

#delete-wrapper .cap {
  border-radius: 3px;
  border: 1px solid #5a4a4a; /* Proporción del borde */
  height: 10px; /* Proporción de altura */
  margin: 0 auto;
  max-width: 40px;
  position: relative;
  background-color: #ffffff;
  transition: 0.2s cubic-bezier(0.61, -0.01, 0.49, 1.06) all;
  transform-origin: center;
}

#delete-wrapper .cap::before {
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid #5a4a4a;
  content: "";
  height: 5px; /* Proporción de la altura */
  left: 11.5px;
  position: absolute;
  top: -10px;
  width: 15px; /* Proporción del ancho */
}

#delete-wrapper:hover .cap {
  transform: rotate(-45deg) scale(0.5); /* Ajuste de escala al hacer hover */
  transition: 0.2s cubic-bezier(0.61, -0.01, 0.49, 1.06) all;
}
</style>