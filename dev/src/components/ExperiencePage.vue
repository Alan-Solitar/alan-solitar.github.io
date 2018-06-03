<template>
  <div>
    <v-container>

    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="(section,index) in tabNames"
        :key="index"
        :href="`#${section}`"
        ripple
      >
        {{section}}
      </v-tab>
      <v-tab-item
        id= 'Personal Projects'
        lazy
        
      >
      <experience-container :experienceList="experience.projects"/>
      </v-tab-item>
      <v-tab-item
        id= 'Internships'
        lazy
        
      >
      <experience-container :experienceList="experience.internships"/>
      </v-tab-item>
      <v-tab-item
        id= 'Work Experience'
        lazy
      >
      <experience-container :experienceList="experience.workExperience"/>
      </v-tab-item>
    </v-tabs>
    </v-container>

  </div>
</template>

<script>
import ExperienceContainer from './ExperienceContainer'
import experience from '@/data'
export default {
  name: 'ExperiencePage',
  components: {ExperienceContainer},
  data () {
    return {
      tabNames: ['Personal Projects', 'Internships', 'Work Experience'],
      experience: experience
    }
  }
}
</script>

<style scoped>

</style>
