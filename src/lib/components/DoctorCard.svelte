<script>
  export let doctor;
</script>

<div class="doctor-card">
  <h3>{doctor.name}</h3>
  <p>{doctor.specialty}</p>
  <p>Rating: {'★'.repeat(doctor.rating) + '☆'.repeat(5 - doctor.rating)} ({doctor.rating})</p>
  <p>{doctor.experience} years experience</p>
  <a href="/book/{doctor.id}">View Profile & Book</a>
</div>