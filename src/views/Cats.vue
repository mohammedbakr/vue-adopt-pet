<template>
  <div>
    <app-pet-table species="cats" :pets="cats"></app-pet-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  name: 'Cats',
  components: {
    appPetTable: PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style>
</style>
