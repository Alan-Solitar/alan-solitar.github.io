<template>
  <div>
<v-card>
  <v-container fluid>
    <v-card-title>
      <h3>{{title}}</h3>
    </v-card-title>
    <slot name="meta"></slot>
    <slot name="content"></slot>
  </v-container>
</v-card>
  </div>
</template>

<script>
export default {
  name: 'GeneralCard',
  props: {
    title: {
      type: String,
      default: 'My Title'
    }
  }
}
</script>

<style scoped>

</style>
