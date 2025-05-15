<script>
  import { format } from 'date-fns';
  export let booking;
</script>

<div class="booking-card">
  <h3>{booking.doctor}</h3>
  <p>Date: {format(new Date(booking.date), 'PPP')}</p>
</div>