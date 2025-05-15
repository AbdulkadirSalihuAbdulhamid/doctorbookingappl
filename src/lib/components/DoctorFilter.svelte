<script>
  import { createEventDispatcher } from 'svelte';
  export let specialization;
  const dispatch = createEventDispatcher();
  const specializations = ['All Specializations', 'Cardiology', 'Neurology'];

  function handleFilter() {
    dispatch('filter', specialization);
  }
</script>

<div class="filter">
  <select bind:value={specialization}>
    {#each specializations as spec}
      <option value={spec}>{spec}</option>
    {/each}
  </select>
  <button on:click={handleFilter}>Filter by Specialization</button>
</div>

<style>
  .filter {
    margin: 10px 0;
  }
  select, button {
    margin-right: 10px;
    padding: 5px;
  }
</style>