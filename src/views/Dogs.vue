<template>
  <div>
    <app-pet-table species="dogs" :pets="dogs"></app-pet-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  name: 'Dogs',
  components: {
    appPetTable: PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style>
</style>
