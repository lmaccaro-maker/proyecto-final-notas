<script setup>
const props = defineProps({
  note: Object, 
  deleteNotes: Function,
});

const deleteThisNote=() => {
  props.deleteNotes(props.note.id)
}

</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="note.title" />
    <input type="checkbox" v-model="note.marked" />
    <button v-if="deleteNotes" @click="deleteThisNote">Delete</button>
  </article>
</template>

<style scoped>
.note-card {
  height: 300px;
  width: 300px;
  background-color: #fec89a;
  padding: 20px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 40px;
  margin-bottom: 50px;
  position: relative;
  top: -20px;
  scrollbar-width: thin;
  scrollbar-color: #d2a860 #fec89a;
}


</style>
