import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([]);


  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  const addNote = (title) => {
    notes.value.unshift(
      {
        id: createId(),
        title,
        marked: false
      })
  }

  const deleteNotes = (id) => {
    notes.value = notes.value.filter(note => {
      return note.id !== id
    })
  }

  return {
    notes,
    addNote,
    deleteNotes,
    loading: false,
    error: false
  };
}, {
  persist: true
});