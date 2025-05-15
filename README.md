# DoctorBookingApp

A simple doctor booking application built with SvelteKit.

## Setup

1. Clone the repository: `git clone https://github.com/AbdulkadirSalihuAbdulhamid/doctorbookingappl.git`
2. Navigate to the project directory: `cd doctorbookingappl`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open `http://localhost:5173` in your browser.

## Features

- View and filter doctors by specialization
- Book appointments with a selected date (with validation)
- View and cancel bookings
- Responsive design with SCSS styling
- External API integration with jsonplaceholder.typicode.com

## Routes

- `/`: Home page with a list of doctors
- `/doctors`: Filterable list of doctors
- `/book/[id]`: Book an appointment with a specific doctor
- `/bookings`: View and cancel your bookings
- `/about`: Static about page

## Components

- `Header`, `Footer`, `Navigation`, `DoctorCard`, `DoctorFilter`, `BookingCard`, `LoadingSpinner`, `ErrorMessage`

## API Calls

- `getDoctors`: Fetches doctors from an external API (jsonplaceholder.typicode.com)
- `getBookings`: Retrieves bookings (simulated in-memory)
- `bookAppointment`: Books an appointment (simulated in-memory)
- `cancelAppointment`: Cancels an appointment (simulated in-memory)

## Dependencies

- `date-fns`: For date formatting in booking cards
- `sass-embedded`: For SCSS preprocessing
- SvelteKit and Vite for the framework and build tool

## Submission

This project is submitted as part of a web development project. The repository is hosted at:  
https://github.com/AbdulkadirSalihuAbdulhamid/doctorbookingappl