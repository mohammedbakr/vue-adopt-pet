<template>
  <div>
    <h3>{{ species }} for Adoption</h3>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "PetTable",
  props: {
    species: String,
    pets: Array
  }
};
</script>

<style>
</style>
