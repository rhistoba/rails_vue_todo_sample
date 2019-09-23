import Vue from 'vue'

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
    }
  })
})
