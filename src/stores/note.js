import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const notes = ref([
        {
            id: "1",
            title: "Ir al supermercado",
            marked: false

        },

        {
            id: "2",
            title: "Ir al gym",
            marked: false

        },
    ])

    return {
        notes,
    };
});