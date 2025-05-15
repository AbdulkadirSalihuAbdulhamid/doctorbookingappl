<script>
  import DoctorFilter from '$lib/components/DoctorFilter.svelte';
  import DoctorCard from '$lib/components/DoctorCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'; 
  import { onMount } from 'svelte';
  import { getDoctors } from '$lib/services/api.js';

  let doctors = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      doctors = await getDoctors();
    } catch (err) {
      error = 'Failed to load doctors';
    } finally {
      loading = false;
    }
  });
</script>

<div class="container">
  <h1>Find and Book Top Specialists</h1>
  <p>Easy appointments with qualified doctors</p>
  <a href="/doctors">Find Doctors</a>
  {#if loading}
    <LoadingSpinner />
  {:else if error}
    <ErrorMessage message={error} />
  {:else}
    <DoctorFilter />
    {#each doctors as doctor}
      <DoctorCard {doctor} />
    {/each}
  {/if}
</div>