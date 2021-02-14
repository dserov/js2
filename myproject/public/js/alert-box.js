Vue.component('alert-box', {
    props: {
        message: String
    },
    template: `
    <div class="alert-box" v-show="message.length > 0">
      <strong>Ошибка!</strong>
      {{message}}
      <button @click="$emit('on-clear-error')">Close</button>
    </div>
  `
});
