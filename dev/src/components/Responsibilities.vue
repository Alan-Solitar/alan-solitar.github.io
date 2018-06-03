<template>
  <div>
    <v-list>
      <v-list-tile v-for="(item,index) in items" :key="index">{{item}}</v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
