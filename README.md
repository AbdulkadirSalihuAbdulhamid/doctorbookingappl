# DoctorBookingAppl

A simple doctor booking application built with SvelteKit.

## App Purpose

DoctorBookingAppl is a simple doctor booking application built with SvelteKit. It allows users to view and filter doctors by specialization, book appointments with date validation, and manage bookings through a responsive, SCSS-styled interface. The app integrates with jsonplaceholder.typicode.com for external data and simulates in-memory booking storage.

## Setup

1. Clone the repository: `git clone https://github.com/AbdulkadirSalihuAbdulhamid/doctorbookingappl.git`
2. Navigate to the project directory: `cd doctorbookingappl`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open `http://localhost:5173` in your browser.

## Used Technologies

- **JavaScript**: Programming language for the application logic.
- **SvelteKit**: Framework for building the application and handling routing.
- **Vite**: Build tool for development and production builds.
- **SCSS**: Styling language for responsive design.
- **Git**: Version control system for managing the project.

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

## Used Endpoints

- **Internal Endpoints (Routes)**:
  - `/`: Home page with a list of doctors
  - `/doctors`: Filterable list of doctors
  - `/book/[id]`: Book an appointment with a specific doctor
  - `/bookings`: View and cancel your bookings
  - `/about`: Static about page
- **External API Endpoints**:
  - `GET https://jsonplaceholder.typicode.com/users`: Fetches a list of doctors (simulated as users) for display.
- **Simulated API Functions**:
  - `getBookings`: Retrieves bookings (simulated in-memory)
  - `bookAppointment`: Books an appointment (simulated in-memory)
  - `cancelAppointment`: Cancels an appointment (simulated in-memory)

## Folder Structure

The project follows a well-organized folder structure typical of a SvelteKit application:

-doctorbookingappl/
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── README.md
├── eslint.config.js
├── jsconfig.js
├── package-lock.json
├── package.json
├── src/
│   ├── app.html
│   ├── lib/
│   │   ├── components/
│   │   │   ├── BookingCard.svelte
│   │   │   ├── DoctorCard.svelte
│   │   │   ├── DoctorFilter.svelte
│   │   │   ├── ErrorMessage.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── LoadingSpinner.svelte
│   │   │   └── Navigation.svelte
│   │   ├── index.js
│   │   └── services/
│   │       └── api.js
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   ├── about/
│   │   │   └── +page.svelte
│   │   ├── book/
│   │   │   └── [id]/
│   │   │       └── +page.svelte
│   │   ├── bookings/
│   │   │   └── +page.svelte
│   │   └── doctors/
│   │       └── +page.svelte
│   ├── styles/
│   │   ├── README.md
│   │   └── global.scss
├── static/
│   └── favicon.png
├── svelte.config.js
└── vite.config.js


## Description of Stored Data

- **Purpose**: The application stores booking data to allow users to view and manage their appointments with doctors. This data is temporary and persists only during the session.
- **Structure**: Bookings are stored in-memory as an array of objects, where each booking includes:
  - `id`: Unique identifier for the booking.
  - `doctorId`: ID of the doctor associated with the booking.
  - `date`: Date and time of the appointment (formatted using `date-fns`).
  - `userId`: ID of the user making the booking (simulated as a placeholder).
- **Storage Method**: The data is maintained in a JavaScript array within the `src/lib/services/api.js` file, simulating a simple in-memory database. No persistent storage (e.g., SQL or NoSQL) is used, as this is a client-side application.

## Used External Services

- **jsonplaceholder.typicode.com**: A free fake API service used to fetch a list of doctors (simulated as users).

## Dependencies

- `date-fns`: For date formatting in booking cards
- `sass-embedded`: For SCSS preprocessing
- SvelteKit and Vite for the framework and build tool

## Submission

This project is submitted as part of a web development assignment. The repository is hosted at:  
https://github.com/AbdulkadirSalihuAbdulhamid/doctorbookingappl