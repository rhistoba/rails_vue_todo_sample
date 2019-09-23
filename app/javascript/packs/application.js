import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'
import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import '../src/main'

Vue.use(TurbolinksAdapter)

Rails.start()
Turbolinks.start()
