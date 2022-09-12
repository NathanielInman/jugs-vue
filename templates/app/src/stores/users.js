import { defineStore } from 'pinia';

export const usersStore = defineStore('users', {
  state () {
    return {
      name: '<%= authorName %>'
    };
  },
  getters: {},
  actions: {}
});
