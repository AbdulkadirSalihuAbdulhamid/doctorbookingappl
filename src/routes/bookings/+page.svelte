<script>
  import { onMount } from 'svelte';
  import { getBookings, cancelAppointment } from '$lib/services/api.js';
  import BookingCard from '$lib/components/BookingCard.svelte';

  let bookings = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      bookings = await getBookings();
    } catch (err) {
      error = 'Failed to load bookings';
    } finally {
      loading = false;
    }
  });

  async function handleCancel(bookingId) {
    try {
      await cancelAppointment(bookingId);
      bookings = bookings.filter(b => b.id !== bookingId);
      alert('Appointment cancelled successfully!');
    } catch (err) {
      alert('Failed to cancel appointment');
    }
  }
</script>

<div class="container">
  <h1>Your Bookings</h1>
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p>{error}</p>
  {:else if bookings.length === 0}
    <p>No bookings yet. Book an appointment to get started!</p>
  {:else}
    {#each bookings as booking}
      <div class="booking-card">
        <BookingCard {booking} />
        <button on:click={() => handleCancel(booking.id)}>Cancel Appointment</button>
      </div>
    {/each}
  {/if}
</div>