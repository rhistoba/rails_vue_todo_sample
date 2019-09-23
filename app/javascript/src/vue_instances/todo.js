import Vue from 'vue'
import axios from '../axios'
import Turoblinks from 'turbolinks'

document.addEventListener('turbolinks:load', () => {
  const el = document.getElementById('vue-todo')
  if (!el) return
  new Vue({
    el: el,
    data() {
      return {
        todos: []
      }
    },
    mounted() {
      this.todos = JSON.parse(this.$el.getAttribute('data-init'))
    },
    methods: {
      changeToDone(todo) {
        axios.patch(`/todos/${todo.id}/change_status`, {
          status: 'done'
        }).then(response => {
          Turoblinks.visit('/')
        })
      },
      changeToInProgress(todo) {
        axios.patch(`/todos/${todo.id}/change_status`, {
          status: 'in_progress'
        }).then(response => {
          Turoblinks.visit('/')
        })
      }
    }
  })
})
