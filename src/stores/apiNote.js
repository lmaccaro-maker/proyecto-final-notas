import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import {
  addNote, getNotes, deleteNote
} from "../services/api";


export const useApiNoteStore = defineStore("notes", () => {
  const notes = ref([]);
  const error = ref(false);
  const loading = ref(false);

  onMounted(async () => {
    await getStoreNotes()
  })

  const getStoreNotes = async () => {
    try {
      error.value = false
      loading.value = true

      const response = await getNotes()
      console.log({ response })
      notes.value = response
    } catch (e) {
      error.value = true
    } finally {
      loading.value = false
    }
  }



  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  const addStoreNote = async (title) => {
    try {
      error.value = false
      await addNote({
        id: createId(),
        title,
        marked: false
      })

    } catch (e) {
      error.value = true
    } finally {
      getStoreNotes()
    }
  }

  const deleteNotes = async (id) => {
    try {
      error.value = false
      await deleteNote(id)
    } catch (e) {
      error.value = true
    } finally {
      getStoreNotes()
    }
  }

  return {
    notes,
    addNote: addStoreNote,
    loading,
    error,
    deleteNotes
  };
});