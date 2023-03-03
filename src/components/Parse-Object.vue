<template>
  <div style="padding: 20px;">
    foo:
    <input v-model="_object.foo"/>
    <br/>
    bar:
    <input v-model="_object.bar"/>
    <br/>
    <button @click="object.save()">Save</button>
    <button v-if="_object.dirtyKeys().length" @click="_object.revert()">Revert</button>
    <div>
      Result:
      <br/>
      {{ _object._toFullJSON() }}
    </div>
    <div>
      Dirty Keys:
      <br/>
      {{ _object.dirtyKeys() }}
    </div>
    <div v-if="object.id">
      Object saved with id {{object.id}}
      <button @click="_object = new $Parse.Object('Test')">Create New</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parse-Object',
  props: ['object'],
  computed: {
    _object: {
      get () { return this.object },
      set (value) { this.$emit('update:object', value) },
    },
  },
}
</script>

