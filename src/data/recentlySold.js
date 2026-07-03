/**
 * Recently Sold — illustrative examples of typical inventory turnover.
 * These are representative sale examples (not tied to specific verified transactions),
 * shown to demonstrate the pace and variety of vehicles that move through Riri Cars.
 * Models shown are different from current live stock (see src/data/cars.js) to avoid
 * any confusion with vehicles actually available today.
 * Images: real photos of the matching model/generation, sourced from Wikimedia Commons.
 * Using their 500px thumbnail endpoint (not the multi-MB originals) for reasonable page weight.
 */

export const recentlySold = [
  {
    id: 1,
    year: 2019,
    make: 'Toyota',
    model: 'Harrier',
    trim: 'Hybrid Premium',
    bodyType: 'SUV',
    price: 3450000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2017-2020_Toyota_Harrier_Hybrid_Premium_front_left.jpg/500px-2017-2020_Toyota_Harrier_Hybrid_Premium_front_left.jpg',
  },
  {
    id: 2,
    year: 2018,
    make: 'Mazda',
    model: 'Demio',
    trim: 'XD Diesel',
    bodyType: 'Hatchback',
    price: 1250000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mazda_DEMIO_XD_%28DJ%29_front.JPG/500px-Mazda_DEMIO_XD_%28DJ%29_front.JPG',
  },
  {
    id: 3,
    year: 2017,
    make: 'Nissan',
    model: 'Wingroad',
    trim: 'Rider',
    bodyType: 'Station Wagon',
    price: 1550000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nissan_WINGROAD_Rider_%28DBA-Y12%29_front.jpg/500px-Nissan_WINGROAD_Rider_%28DBA-Y12%29_front.jpg',
  },
  {
    id: 4,
    year: 2020,
    make: 'Toyota',
    model: 'Passo',
    trim: 'Moda',
    bodyType: 'Hatchback',
    price: 1050000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2016_toyota_passo_x.JPG/500px-2016_toyota_passo_x.JPG',
  },
]
