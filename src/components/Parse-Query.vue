<template>
  <div>
    Objects:
    <div v-for="object in objects" :key="object._localId">
      <b>id: {{object.id}}</b>
      <div v-for="field in Object.keys(object.bind)" :key="`${field}-${object._localId}`">
        {{field}}: {{ object.bind[field] }}
      </div>
      <button @click="$emit('edit', object)">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parse-Object',
  emits: ['edit'],
  data() {
    return {
      objects: [],
    }
  },
  async created() {
    this.objects = await new this.$Parse.Query('Test').find();
  }
}
</script>

