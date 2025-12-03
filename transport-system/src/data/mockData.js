
export const users = [
  { id: 1, name: 'Officer John', email: 'officer@iut.edu', role: 'officer' },
  { id: 2, name: 'Driver Mike', email: 'driver@iut.edu', role: 'driver' },
  { id: 3, name: 'Student Alice', email: 'student@iut.edu', role: 'subscriber', routeId: 1, seat: 'A1' },
  { id: 4, name: 'Guest Bob', email: 'guest@gmail.com', role: 'user' },
];

export const vehicles = [
  { id: 1, plate: 'DHK-1234', type: 'Bus', status: 'Active', seats: 40, driverId: 2 },
  { id: 2, plate: 'DHK-5678', type: 'Microbus', status: 'Maintenance', seats: 12, driverId: null },
];

export const drivers = [
  { id: 1, name: 'Driver Mike', phone: '01700000000', status: 'Assigned', vehicleId: 1 },
  { id: 2, name: 'Driver Tom', phone: '01800000000', status: 'Unassigned', vehicleId: null },
];

export const routes = [
  { id: 1, name: 'Route A', start: 'Uttara', end: 'IUT', time: '07:00 AM', seats: 40 },
  { id: 2, name: 'Route B', start: 'Mirpur', end: 'IUT', time: '07:15 AM', seats: 40 },
];

export const trips = [
  { id: 1, routeId: 1, date: '2023-10-27', status: 'Scheduled', booked: 35 },
];
