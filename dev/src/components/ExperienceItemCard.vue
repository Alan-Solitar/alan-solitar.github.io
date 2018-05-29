<template>
  <div>
    <general-card :title="title">
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
    components:{GeneralCard,Responsibilities}
  }
</script>

<style scoped>

</style>