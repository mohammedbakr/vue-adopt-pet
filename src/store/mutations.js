export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
    state.pets.push(pet)
  }
}
