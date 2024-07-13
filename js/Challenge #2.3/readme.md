# Cinema Seating Reservation System

This JavaScript project simulates a cinema seating reservation system. It allows users to reserve seats, display current seating status, and retrieve seats by availability.


## Usage

1. Initialize a Cinema instance.
2. Reserve seats using `reserve(column, row)`.
3. Display the seating arrangement with `showCinema()`.
4. Retrieve seats by status using `getSeatsByStatus(status)`.

## Classes

### Seat

Represents an individual seat in the cinema with properties and methods to manage its reservation status.

### Cinema

Manages the overall cinema seating arrangement using a grid of seats, allowing seat reservation, status display, and retrieval of seats by status.

## Methods

- **reserve(column, row)**: Reserves a seat at the specified column and row if it is available.
- **findSeat(column, row)**: Finds and returns a specific seat object based on its column and row coordinates.
- **showCinema()**: Displays the current seating arrangement of the cinema, showing each seat's status in color-coded format.
- **getSeatsByStatus(status)**: Retrieves all seats that match a specified status ('Available' or 'Reserved').
