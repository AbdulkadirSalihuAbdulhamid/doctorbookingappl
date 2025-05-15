// Simulated data (kept as fallback)
let doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', rating: 4.8, experience: 12 },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', rating: 4.7, experience: 9 }
];
let bookings = [
  { id: 1, doctor: 'Dr. Sarah Johnson', date: '2025-05-20' }
];

// External API call using jsonplaceholder.typicode.com
export async function getDoctors() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const externalDoctors = data.map(user => ({
      id: user.id + doctors.length, // Avoid ID conflicts with simulated data
      name: user.name,
      specialty: user.id % 2 === 0 ? 'Cardiology' : 'Neurology', // Simulated specialty
      rating: 4.5 + (user.id % 5) * 0.1, // Simulated rating
      experience: 5 + (user.id % 10) // Simulated experience
    }));
    return [...doctors, ...externalDoctors]; // Merge simulated and external data
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return doctors; // Fallback to simulated data
  }
}

// Simulated internal API calls (since there's no backend)
export async function getBookings() {
  try {
    // Simulate fetching bookings (replace with real API if you have a backend)
    return bookings;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return bookings; // Fallback to simulated data
  }
}

export async function bookAppointment(doctorId, date) {
  try {
    const doctor = doctors.find(d => d.id === parseInt(doctorId));
    if (!doctor) throw new Error('Doctor not found');
    const newBooking = { id: bookings.length + 1, doctor: doctor.name, date };
    bookings.push(newBooking);
    return newBooking;
  } catch (error) {
    console.error('Error booking appointment:', error);
    throw error;
  }
}

export async function cancelAppointment(bookingId) {
  try {
    bookings = bookings.filter(b => b.id !== parseInt(bookingId));
    return { success: true };
  } catch (error) {
    console.error('Error cancelling appointment:', error);
    throw error;
  }
}