<template>
  <div>
    <article v-for="(experience,index) in experienceList.items" :key="index">
      <experience-item-card :items="experience.description" :title="experience.title">
        <template v-if="experienceList.meta" slot="metaData">
          <h2>{{experience.company}}</h2>
          <h3>{{experience.dates}}</h3>
        </template>
        </experience-item-card>
    </article>
  </div>
</template>

<script>
import ExperienceItemCard from '@/components/ExperienceItemCard'
export default {
  name: 'ExperienceContainer',
  components: {ExperienceItemCard},
  props: {
    experienceList: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
