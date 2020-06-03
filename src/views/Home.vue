<template>
  <div class="home">
    <h1>Adopt a New Best Friend!</h1>
    <h4>Animals Count: {{ animalsCount }}</h4>
    <p>Cats Count: {{ getAllCats.length }} | Dogs Count: {{ getAllDogs.length }}</p>

    <button @click="showPetForm = !showPetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      form: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    handleSubmit () {
      const { species, age, name } = this.form
      const payload = {
        species,
        pet: {
          name,
          species,
          age
        }
      }
      this.addPet(payload)
      this.form.name = ''
      this.form.age = 0
      this.form.species = null
    }
  }
}
</script>
