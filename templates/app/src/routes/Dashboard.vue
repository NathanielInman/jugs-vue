<template lang="pug">
main: .pt-5.card.flex.flex-wrap.align-items-center.justify-content-center
  .container
    h1.text-2xl Welcome {{name}} to Slush Justice!
    hr
    p.
      This generator helps set you up for a SPA written in modern javascript
      with the Vue framework.
    hr
    h3.text-xl.font-light Technologies
    span.font-bold PUG
    span : template preprocessing
    br
    span.font-bold Stylus
    span : style preprocessing
    br
    span.font-bold PostCSS
    span : style optimizer used for autoprefixer
    br
    span.font-bold Vue + Vue-Router
    span : Modern SPA framework with mix of React/Angular technologies
    br
    span.font-bold Vuex
    span : Flux data management. Multiple stores, single dispatcher, no clumsy reducers
    br
    span.font-bold Parcel
    span : Project compilation, module bundler, uglifier, etc.
    br
    span.font-bold Buefy
    span : Vue component library extension of Bulma style library
    br
    span.font-bold Vue Hot Reload API
    span : Auto-reload and update
    br
    span.font-bold Babel
    span : Use modern javascript now and polyfill for older browsers.
</template>
<script>
import { mapState } from 'pinia';
import { usersStore } from '../stores/';

// Prepare the main template
export default {
  name: 'DashboardIndex',
  computed: {
    ...mapState(usersStore, ['name'])
  }
};
</script>
<style lang="stylus" scoped>
.bold
  font-weight bold
</style>
