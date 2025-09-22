// Import các hình ảnh xe
import car1 from './assets/Car/Car (1).png';
import car2 from './assets/Car/Car (2).png';
import car3 from './assets/Car/Car (3).png';
import car4 from './assets/Car/Car (4).png';
import car5 from './assets/Car/Car (5).png';
import car6 from './assets/Car/Car (6).png';
import car7 from './assets/Car/Car (7).png';
import car8 from './assets/Car/Car (8).png';
import car9 from './assets/Car/Car.png';

// Import các icon
import gasStationIcon from './assets/Car/Icon/gas-station.png';
import profileIcon from './assets/Car/Icon/profile-2user.png';

export const carData = [
  {
    id: 1,
    name: 'VinFast VF 5',
    price: '2.690.000',
    currency: 'VND/Ngày',
    image: car1,
    fuel: '5.0L',
    passengers: '4',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 2,
    name: 'VinFast VF 7',
    price: '1.905.000',
    currency: 'VND/Ngày',
    image: car2,
    fuel: '6.2L',
    passengers: '5',
    transmission: 'Automatic',
    category: 'Sedan'
  },
  {
    id: 3,
    name: 'VinFast VF 8 Plus',
    price: '1.950.000',
    currency: 'VND/Ngày',
    image: car3,
    fuel: '7.0L',
    passengers: '5',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 4,
    name: 'VinFast VF 5',
    price: '890.000',
    currency: 'VND/Ngày',
    image: car4,
    fuel: '5.0L',
    passengers: '4',
    transmission: 'Automatic',
    category: 'Hatchback'
  },
  {
    id: 5,
    name: 'VinFast VF 3',
    price: '590.000',
    currency: 'VND/Ngày',
    image: car5,
    fuel: '4.5L',
    passengers: '4',
    transmission: 'Manual',
    category: 'Compact'
  },
  {
    id: 6,
    name: 'VinFast VF 6',
    price: '990.000',
    currency: 'VND/Ngày',
    image: car6,
    fuel: '5.5L',
    passengers: '5',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 7,
    name: 'VinFast VF 8',
    price: '1.060.000',
    currency: 'VND/Ngày',
    image: car7,
    fuel: '6.8L',
    passengers: '5',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 8,
    name: 'VinFast VF 9',
    price: '1.750.000',
    currency: 'VND/Ngày',
    image: car8,
    fuel: '8.0L',
    passengers: '7',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 9,
    name: 'VinFast VF 5 Plus',
    price: '1.340.000',
    currency: 'VND/Ngày',
    image: car9,
    fuel: '5.2L',
    passengers: '5',
    transmission: 'Automatic',
    category: 'SUV'
  }
];

export const icons = {
  gasStation: gasStationIcon,
  profile: profileIcon
};