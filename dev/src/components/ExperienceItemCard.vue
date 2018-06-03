<template>
  <div>
    <general-card :title="title">
    <template slot="meta">
      <slot name="metaData"> </slot>
    </template>
    <template slot="content">
      <responsibilities :items="items"/>
    </template>
    </general-card>
  </div>
</template>

<script>
import GeneralCard from './GeneralCard'
import Responsibilities from './Responsibilities'

export default {
  name: 'ExperienceItemCard',
  props: {
    items: {
      type: Array
    },
    title: {
      type: String
    }
  },
  components: {GeneralCard, Responsibilities}
}
</script>

<style scoped>

</style>
