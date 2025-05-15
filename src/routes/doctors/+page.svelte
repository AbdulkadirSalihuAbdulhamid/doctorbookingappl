<script>
  import DoctorFilter from '$lib/components/DoctorFilter.svelte';
  import DoctorCard from '$lib/components/DoctorCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import { onMount } from 'svelte';
  import { getDoctors } from '$lib/services/api.js';

  let doctors = [];
  let filteredDoctors = [];
  let loading = true;
  let error = null;
  let specialization = 'All Specializations';

  onMount(async () => {
    try {
      doctors = await getDoctors();
      filteredDoctors = doctors;
    } catch (err) {
      error = 'Failed to load doctors';
    } finally {
      loading = false;
    }
  });

  function filterDoctors(spec) {
    specialization = spec;
    if (spec === 'All Specializations') {
      filteredDoctors = doctors;
    } else {
      filteredDoctors = doctors.filter(doctor => doctor.specialty === spec);
    }
  }
</script>

<div class="container">
  <h1>Find a Doctor</h1>
  <DoctorFilter {specialization} on:filter={e => filterDoctors(e.detail)} />
  {#if loading}
    <LoadingSpinner />
  {:else if error}
    <ErrorMessage message={error} />
  {:else}
    {#each filteredDoctors as doctor}
      <DoctorCard {doctor} />
    {/each}
  {/if}
</div>