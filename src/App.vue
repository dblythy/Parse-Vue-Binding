<template>
  <div>
   <button @click="objects = !objects">Switch to {{objects ? 'Queries' : 'Objects'}}</button>
   <br/>
   <ParseObject v-if="objects" v-model:object="object"/>
   <ParseQuery v-else @edit="(val) => {
      object = val
      objects = true
    }"/>
  </div>
</template>

<script>
import ParseObject from './components/Parse-Object.vue'
import ParseQuery from './components/Parse-Query.vue'
export default {
  name: 'App',
  components: {
    ParseObject,
    ParseQuery
  },
  data() {
    return {
      objects: true,
      object: new this.$Parse.Object('Test')
    }
  },
}
</script>

