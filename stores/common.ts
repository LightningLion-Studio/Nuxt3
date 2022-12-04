import { defineStore } from "pinia"

export const useCommon = defineStore("common", {
  state: () => ({
    dark: true,
  }),
  actions: {},
  persist: {
    enabled: true,
  },
})
