<script>
  import { onMount } from 'svelte';
  import { getDoctors, bookAppointment } from '$lib/services/api.js';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let doctor = null;
  let loading = true;
  let error = null;
  let selectedDate = '';
  let dateError = '';

  onMount(async () => {
    try {
      const doctors = await getDoctors();
      const doctorId = $page.params.id;
      doctor = doctors.find(d => d.id === parseInt(doctorId));
      if (!doctor) throw new Error('Doctor not found');
    } catch (err) {
      error = 'Failed to load doctor details';
    } finally {
      loading = false;
    }
  });

  function validateDate() {
    const today = new Date('2025-05-15'); // Current date (as per your setup)
    const chosenDate = new Date(selectedDate);
    if (chosenDate < today) {
      dateError = 'Please select a future date';
      return false;
    }
    dateError = '';
    return true;
  }

  async function handleBooking() {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
    if (!validateDate()) {
      alert(dateError);
      return;
    }
    try {
      await bookAppointment(doctor.id, selectedDate);
      alert('Appointment booked successfully!');
      goto('/bookings');
    } catch (err) {
      alert('Failed to book appointment');
    }
  }
</script>

<div class="container">
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p>{error}</p>
  {:else}
    <h1>{doctor.name}</h1>
    <p>Specialty: {doctor.specialty}</p>
    <p>Rating: {'★'.repeat(Math.round(doctor.rating)) + '☆'.repeat(5 - Math.round(doctor.rating))} ({doctor.rating})</p>
    <p>{doctor.experience} years experience</p>
    <label>
      Select Date:
      <input type="date" bind:value={selectedDate} min="2025-05-15" />
    </label>
    {#if dateError}
      <p style="color: red;">{dateError}</p>
    {/if}
    <button on:click={handleBooking}>Book Appointment</button>
  {/if}
</div>