export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  images: string[];
  listingType: 'For Sale' | 'For Rent';
  description?: string[];
  squareFootage?: number;
  yearBuilt?: number;
  pricePerSqFt?: number;
  parkingAvailability?: string;
  hoaFees?: number;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Sunnyvale Family Home",
    price: 300000,
    location: "Sunnyvale, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-1/1.jpeg",
    images: [
      "/images/properties/property-1/1.jpeg",
      "/images/properties/property-1/2.jpeg",
      "/images/properties/property-1/3.jpeg",
      "/images/properties/property-1/4.jpeg",
      "/images/properties/property-1/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful family home in a quiet neighborhood.",
      "Spacious backyard with a garden.",
      "Recently renovated kitchen with modern appliances."
    ],
    squareFootage: 2000,
    yearBuilt: 2015,
    pricePerSqFt: 150,
    parkingAvailability: "2 Car Garage",
    hoaFees: 100,
  },
  {
    id: 2,
    title: "Maplewood Retreat",
    price: 310000,
    location: "Austin, Texas",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-2/1.jpeg",
    images: [
      "/images/properties/property-2/1.jpeg",
      "/images/properties/property-2/2.jpeg",
      "/images/properties/property-2/3.jpeg",
      "/images/properties/property-2/4.jpeg",
      "/images/properties/property-2/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home with modern updates.",
      "Large front yard and cozy interiors.",
      "Close to schools and parks."
    ],
    squareFootage: 1800,
    yearBuilt: 2010,
    pricePerSqFt: 172,
    parkingAvailability: "Driveway",
    hoaFees: 150,
  },
  {
    id: 3,
    title: "Pine Hill Cottage",
    price: 320000,
    location: "Denver, Colorado",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-3/1.jpeg",
    images: [
      "/images/properties/property-3/1.jpeg",
      "/images/properties/property-3/2.jpeg",
      "/images/properties/property-3/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Nestled in a peaceful neighborhood.",
      "Open concept living area with plenty of natural light.",
      "Hardwood floors throughout."
    ],
    squareFootage: 1900,
    yearBuilt: 2012,
    pricePerSqFt: 168,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 4,
    title: "Oakwood Villa",
    price: 330000,
    location: "Miami, Florida",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-4/1.jpeg",
    images: [
      "/images/properties/property-4/1.jpeg",
      "/images/properties/property-4/2.jpeg",
      "/images/properties/property-4/3.jpeg",
      "/images/properties/property-4/4.jpeg",
      "/images/properties/property-4/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Modern villa with luxurious amenities.",
      "Gourmet kitchen with granite countertops.",
      "Large master bedroom with en-suite bathroom."
    ],
    squareFootage: 2100,
    yearBuilt: 2018,
    pricePerSqFt: 157,
    parkingAvailability: "2 Car Garage",
    hoaFees: 200,
  },
  {
    id: 5,
    title: "Willow Creek Home",
    price: 340000,
    location: "Seattle, Washington",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-5/1.jpeg",
    images: [
      "/images/properties/property-5/1.jpeg",
      "/images/properties/property-5/2.jpeg",
      "/images/properties/property-5/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home with a lovely garden.",
      "Spacious living area perfect for entertaining.",
      "Quiet cul-de-sac location."
    ],
    squareFootage: 1950,
    yearBuilt: 2014,
    pricePerSqFt: 174,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 6,
    title: "Birchwood Cottage",
    price: 350000,
    location: "Boston, Massachusetts",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-6/1.jpeg",
    images: [
      "/images/properties/property-6/1.jpeg",
      "/images/properties/property-6/2.jpeg",
      "/images/properties/property-6/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming cottage with rustic appeal.",
      "Updated kitchen and bathrooms.",
      "Lovely front porch for relaxation."
    ],
    squareFootage: 1700,
    yearBuilt: 2008,
    pricePerSqFt: 205,
    parkingAvailability: "Carport",
  },
  {
    id: 7,
    title: "Green Meadow Residence",
    price: 360000,
    location: "Portland, Oregon",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-7/1.jpeg",
    images: [
      "/images/properties/property-7/1.jpeg",
      "/images/properties/property-7/2.jpeg",
      "/images/properties/property-7/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful home with open living space.",
      "Private backyard with mature trees.",
      "Close to shopping and amenities."
    ],
    squareFootage: 1850,
    yearBuilt: 2013,
    pricePerSqFt: 194,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 8,
    title: "Silver Lake House",
    price: 370000,
    location: "Orlando, Florida",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-8/1.jpeg",
    images: [
      "/images/properties/property-8/1.jpeg",
      "/images/properties/property-8/2.jpeg",
      "/images/properties/property-8/3.jpeg",
      "/images/properties/property-8/4.jpeg",
      "/images/properties/property-8/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Lovely home with views of Silver Lake.",
      "Updated flooring and appliances.",
      "Large deck for outdoor entertaining."
    ],
    squareFootage: 2200,
    yearBuilt: 2017,
    pricePerSqFt: 168,
    parkingAvailability: "Attached Garage",
    hoaFees: 180,
  },
  {
    id: 9,
    title: "Riverbend Retreat",
    price: 380000,
    location: "Phoenix, Arizona",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-9/1.jpeg",
    images: [
      "/images/properties/property-9/1.jpeg",
      "/images/properties/property-9/2.jpeg",
      "/images/properties/property-9/3.jpeg",
      "/images/properties/property-9/4.jpeg",
      "/images/properties/property-9/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home with river views.",
      "Cozy family room with fireplace.",
      "Beautiful landscaping in front and back."
    ],
    squareFootage: 2100,
    yearBuilt: 2016,
    pricePerSqFt: 181,
    parkingAvailability: "Driveway",
  },
  {
    id: 10,
    title: "Sunny Acres Home",
    price: 390000,
    location: "Dallas, Texas",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-10/1.jpeg",
    images: [
      "/images/properties/property-10/1.jpeg",
      "/images/properties/property-10/2.jpeg",
      "/images/properties/property-10/3.jpeg",
      "/images/properties/property-10/4.jpeg",
      "/images/properties/property-10/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Sunny and bright home on a large lot.",
      "Modern kitchen with updated appliances.",
      "Close to local schools and parks."
    ],
    squareFootage: 2000,
    yearBuilt: 2015,
    pricePerSqFt: 195,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 11,
    title: "Hilltop Haven",
    price: 400000,
    location: "Atlanta, Georgia",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-11/1.jpeg",
    images: [
      "/images/properties/property-11/1.jpeg",
      "/images/properties/property-11/2.jpeg",
      "/images/properties/property-11/3.jpeg",
      "/images/properties/property-11/4.jpeg",
      "/images/properties/property-11/5.jpeg",
      "/images/properties/property-11/6.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning home with hilltop views.",
      "Spacious living area with vaulted ceilings.",
      "Private patio with beautiful landscaping."
    ],
    squareFootage: 2300,
    yearBuilt: 2019,
    pricePerSqFt: 174,
    parkingAvailability: "2 Car Garage",
    hoaFees: 120,
  },
  {
    id: 12,
    title: "Lakeside Escape",
    price: 410000,
    location: "Chicago, Illinois",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-12/1.jpeg",
    images: [
      "/images/properties/property-12/1.jpeg",
      "/images/properties/property-12/2.jpeg",
      "/images/properties/property-12/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming lakeside property with amazing views.",
      "Large windows to enjoy natural light.",
      "Spacious backyard perfect for gatherings."
    ],
    squareFootage: 2150,
    yearBuilt: 2017,
    pricePerSqFt: 190,
    parkingAvailability: "Driveway",
  },
  {
    id: 13,
    title: "Cedar Grove Home",
    price: 420000,
    location: "New York, New York",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-13/1.jpeg",
    images: [
      "/images/properties/property-13/1.jpeg",
      "/images/properties/property-13/2.jpeg",
      "/images/properties/property-13/3.jpeg",
      "/images/properties/property-13/4.jpeg",
      "/images/properties/property-13/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautifully crafted home with cedar finishes.",
      "Open floor plan perfect for families.",
      "Close to parks and recreational areas."
    ],
    squareFootage: 2000,
    yearBuilt: 2018,
    pricePerSqFt: 210,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 14,
    title: "Sunny Ridge Residence",
    price: 430000,
    location: "Los Angeles, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-14/1.jpeg",
    images: [
      "/images/properties/property-14/1.jpeg",
      "/images/properties/property-14/2.jpeg",
      "/images/properties/property-14/3.jpeg",
      "/images/properties/property-14/4.jpeg",
      "/images/properties/property-14/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Modern home with open concept living.",
      "Spacious kitchen with breakfast nook.",
      "Large backyard with space for gardening."
    ],
    squareFootage: 2050,
    yearBuilt: 2020,
    pricePerSqFt: 210,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 15,
    title: "Maple Leaf Home",
    price: 440000,
    location: "Nashville, Tennessee",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-15/1.jpeg",
    images: [
      "/images/properties/property-15/1.jpeg",
      "/images/properties/property-15/2.jpeg",
      "/images/properties/property-15/3.jpeg",
      "/images/properties/property-15/4.jpeg",
      "/images/properties/property-15/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Cozy home with maple accents throughout.",
      "Bright and airy living space.",
      "Perfect for first-time home buyers."
    ],
    squareFootage: 1950,
    yearBuilt: 2016,
    pricePerSqFt: 225,
    parkingAvailability: "Carport",
  },
  {
    id: 16,
    title: "Orchard Lane House",
    price: 450000,
    location: "Sacramento, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-16/1.jpeg",
    images: [
      "/images/properties/property-16/1.jpeg",
      "/images/properties/property-16/2.jpeg",
      "/images/properties/property-16/3.jpeg",
      "/images/properties/property-16/4.jpeg",
      "/images/properties/property-16/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Lovely house surrounded by orchards.",
      "Bright and open living spaces.",
      "Great location near schools."
    ],
    squareFootage: 2100,
    yearBuilt: 2015,
    pricePerSqFt: 214,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 17,
    title: "Brookside Haven",
    price: 460000,
    location: "Houston, Texas",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-17/1.jpeg",
    images: [
      "/images/properties/property-17/1.jpeg",
      "/images/properties/property-17/2.jpeg",
      "/images/properties/property-17/3.jpeg",
      "/images/properties/property-17/4.jpeg",
      "/images/properties/property-17/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home by the brook.",
      "Beautiful landscaping with flowers.",
      "Open concept kitchen and dining area."
    ],
    squareFootage: 1800,
    yearBuilt: 2016,
    pricePerSqFt: 256,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 18,
    title: "River View Residence",
    price: 470000,
    location: "Las Vegas, Nevada",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-18/1.jpeg",
    images: [
      "/images/properties/property-18/1.jpeg",
      "/images/properties/property-18/2.jpeg",
      "/images/properties/property-18/3.jpeg",
      "/images/properties/property-18/4.jpeg",
      "/images/properties/property-18/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning views of the river.",
      "Cozy living room with a fireplace.",
      "Perfect for nature lovers."
    ],
    squareFootage: 2150,
    yearBuilt: 2018,
    pricePerSqFt: 219,
    parkingAvailability: "Driveway",
  },
  {
    id: 19,
    title: "Lakeside Villa",
    price: 480000,
    location: "Charlotte, North Carolina",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-19/1.jpeg",
    images: [
      "/images/properties/property-19/1.jpeg",
      "/images/properties/property-19/2.jpeg",
      "/images/properties/property-19/3.jpeg",
      "/images/properties/property-19/4.jpeg",
      "/images/properties/property-19/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful lakeside villa with breathtaking views.",
      "Spacious living room and kitchen.",
      "Ideal for families looking for a vacation home."
    ],
    squareFootage: 2200,
    yearBuilt: 2017,
    pricePerSqFt: 218,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 20,
    title: "Hillside Haven",
    price: 490000,
    location: "Salt Lake City, Utah",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-20/1.jpeg",
    images: [
      "/images/properties/property-20/1.jpeg",
      "/images/properties/property-20/2.jpeg",
      "/images/properties/property-20/3.jpeg",
      "/images/properties/property-20/4.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Quiet hillside home with expansive views.",
      "Large windows to capture natural light.",
      "Great outdoor space for gatherings."
    ],
    squareFootage: 2050,
    yearBuilt: 2019,
    pricePerSqFt: 239,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 21,
    title: "Sunny Crest Home",
    price: 500000,
    location: "Raleigh, North Carolina",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-21/1.jpeg",
    images: [
      "/images/properties/property-21/1.jpeg",
      "/images/properties/property-21/2.jpeg",
      "/images/properties/property-21/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Bright and cheerful home in a sunny location.",
      "Close to parks and schools.",
      "Perfect for families."
    ],
    squareFootage: 1950,
    yearBuilt: 2020,
    pricePerSqFt: 256,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 22,
    title: "Meadowbrook Residence",
    price: 510000,
    location: "Indianapolis, Indiana",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-22/1.jpeg",
    images: [
      "/images/properties/property-22/1.jpeg",
      "/images/properties/property-22/2.jpeg",
      "/images/properties/property-22/3.jpeg",
      "/images/properties/property-22/4.jpeg",
      "/images/properties/property-22/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Spacious home with modern amenities.",
      "Large backyard perfect for pets.",
      "Located in a family-friendly neighborhood."
    ],
    squareFootage: 2200,
    yearBuilt: 2021,
    pricePerSqFt: 232,
    parkingAvailability: "Driveway",
  },
  {
    id: 23,
    title: "Rosewood Retreat",
    price: 520000,
    location: "Minneapolis, Minnesota",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-23/1.jpeg",
    images: [
      "/images/properties/property-23/1.jpeg",
      "/images/properties/property-23/2.jpeg",
      "/images/properties/property-23/3.jpeg",
      "/images/properties/property-23/4.jpeg",
      "/images/properties/property-23/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautifully designed home with rosewood finishes.",
      "Spacious kitchen with island seating.",
      "Close to shopping centers and schools."
    ],
    squareFootage: 2300,
    yearBuilt: 2022,
    pricePerSqFt: 226,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 24,
    title: "Cedar Grove House",
    price: 530000,
    location: "Richmond, Virginia",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-24/1.jpeg",
    images: [
      "/images/properties/property-24/1.jpeg",
      "/images/properties/property-24/2.jpeg",
      "/images/properties/property-24/3.jpeg",
      "/images/properties/property-24/4.jpeg",
      "/images/properties/property-24/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home with cedar accents throughout.",
      "Spacious backyard with deck.",
      "Ideal for families looking for comfort."
    ],
    squareFootage: 2000,
    yearBuilt: 2018,
    pricePerSqFt: 265,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 25,
    title: "Willow Bend Home",
    price: 540000,
    location: "San Diego, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-25/1.jpeg",
    images: [
      "/images/properties/property-25/1.jpeg",
      "/images/properties/property-25/2.jpeg",
      "/images/properties/property-25/3.jpeg",
      "/images/properties/property-25/4.jpeg",
      "/images/properties/property-25/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Bright and airy home with plenty of natural light.",
      "Open floor plan great for entertaining.",
      "Located near parks and recreation."
    ],
    squareFootage: 2150,
    yearBuilt: 2020,
    pricePerSqFt: 251,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 26,
    title: "Birchwood Bungalow",
    price: 550000,
    location: "Boulder, Colorado",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-26/1.jpeg",
    images: [
      "/images/properties/property-26/1.jpeg",
      "/images/properties/property-26/2.jpeg",
      "/images/properties/property-26/3.jpeg",
      "/images/properties/property-26/4.jpeg",
      "/images/properties/property-26/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming bungalow with vintage appeal.",
      "Lovely garden and outdoor space.",
      "Great for a small family or retirees."
    ],
    squareFootage: 1800,
    yearBuilt: 2015,
    pricePerSqFt: 305,
    parkingAvailability: "Driveway",
  },
  {
    id: 27,
    title: "Sunny Acres Bungalow",
    price: 560000,
    location: "Tampa, Florida",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-27/1.jpeg",
    images: [
      "/images/properties/property-27/1.jpeg",
      "/images/properties/property-27/2.jpeg",
      "/images/properties/property-27/3.jpeg",
      "/images/properties/property-27/4.jpeg",
      "/images/properties/property-27/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Cozy bungalow perfect for a small family.",
      "Quiet neighborhood with friendly neighbors.",
      "Close to local shops and amenities."
    ],
    squareFootage: 1750,
    yearBuilt: 2018,
    pricePerSqFt: 320,
    parkingAvailability: "Carport",
  },
  {
    id: 28,
    title: "Maplewood Villa",
    price: 570000,
    location: "Baltimore, Maryland",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-28/1.jpeg",
    images: [
      "/images/properties/property-28/1.jpeg",
      "/images/properties/property-28/2.jpeg",
      "/images/properties/property-28/3.jpeg",
      "/images/properties/property-28/4.jpeg",
      "/images/properties/property-28/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Elegant villa with stunning architecture.",
      "Large outdoor space with landscaping.",
      "High-end finishes throughout the home."
    ],
    squareFootage: 2400,
    yearBuilt: 2021,
    pricePerSqFt: 238,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 29,
    title: "Mountain View Retreat",
    price: 580000,
    location: "Boise, Idaho",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-29/1.jpeg",
    images: [
      "/images/properties/property-29/1.jpeg",
      "/images/properties/property-29/2.jpeg",
      "/images/properties/property-29/3.jpeg",
      "/images/properties/property-29/4.jpeg",
      "/images/properties/property-29/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Breathtaking mountain views from every window.",
      "Cozy living space with fireplace.",
      "Perfect for nature enthusiasts."
    ],
    squareFootage: 2500,
    yearBuilt: 2022,
    pricePerSqFt: 232,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 30,
    title: "Lakeshore Lodge",
    price: 590000,
    location: "Milwaukee, Wisconsin",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-30/1.jpeg",
    images: [
      "/images/properties/property-30/1.jpeg",
      "/images/properties/property-30/2.jpeg",
      "/images/properties/property-30/3.jpeg",
      "/images/properties/property-30/4.jpeg",
      "/images/properties/property-30/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Rustic lodge with beautiful lakeside access.",
      "Spacious deck for entertaining.",
      "Ideal for weekend getaways."
    ],
    squareFootage: 2300,
    yearBuilt: 2019,
    pricePerSqFt: 256,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 31,
    title: "Canyon View Residence",
    price: 600000,
    location: "Salt Lake City, Utah",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-31/1.jpeg",
    images: [
      "/images/properties/property-31/1.jpeg",
      "/images/properties/property-31/2.jpeg",
      "/images/properties/property-31/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning canyon views and serene living.",
      "Open floor plan with modern design.",
      "Close to hiking trails."
    ],
    squareFootage: 2200,
    yearBuilt: 2021,
    pricePerSqFt: 273,
    parkingAvailability: "Driveway",
  },
  {
    id: 32,
    title: "Cedar Hill Retreat",
    price: 610000,
    location: "Reno, Nevada",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-32/1.jpeg",
    images: [
      "/images/properties/property-32/1.jpeg",
      "/images/properties/property-32/2.jpeg",
      "/images/properties/property-32/3.jpeg",
      "/images/properties/property-32/4.jpeg",
      "/images/properties/property-32/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Private retreat with beautiful cedar trees.",
      "Luxurious finishes and large windows.",
      "Great for hosting family gatherings."
    ],
    squareFootage: 2400,
    yearBuilt: 2022,
    pricePerSqFt: 254,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 33,
    title: "Willow Creek Cottage",
    price: 620000,
    location: "Charlotte, North Carolina",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-33/1.jpeg",
    images: [
      "/images/properties/property-33/1.jpeg",
      "/images/properties/property-33/2.jpeg",
      "/images/properties/property-33/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming cottage with a warm ambiance.",
      "Great outdoor space for children and pets.",
      "Located in a peaceful neighborhood."
    ],
    squareFootage: 1900,
    yearBuilt: 2017,
    pricePerSqFt: 326,
    parkingAvailability: "Driveway",
  },
  {
    id: 34,
    title: "Redwood Retreat",
    price: 630000,
    location: "Portland, Oregon",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-34/1.jpeg",
    images: [
      "/images/properties/property-34/1.jpeg",
      "/images/properties/property-34/2.jpeg",
      "/images/properties/property-34/3.jpeg",
      "/images/properties/property-34/4.jpeg",
      "/images/properties/property-34/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Luxurious home surrounded by redwood trees.",
      "Modern kitchen with high-end appliances.",
      "Ideal for nature lovers."
    ],
    squareFootage: 2500,
    yearBuilt: 2021,
    pricePerSqFt: 252,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 35,
    title: "Sunnyvale House",
    price: 640000,
    location: "San Francisco, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-35/1.jpeg",
    images: [
      "/images/properties/property-35/1.jpeg",
      "/images/properties/property-35/2.jpeg",
      "/images/properties/property-35/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Bright and spacious home in a sunny location.",
      "Open floor plan perfect for families.",
      "Close to all amenities."
    ],
    squareFootage: 2300,
    yearBuilt: 2019,
    pricePerSqFt: 278,
    parkingAvailability: "1 Car Garage",
  },
  {
    id: 36,
    title: "Seaside Villa",
    price: 650000,
    location: "San Diego, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-36/1.jpeg",
    images: [
      "/images/properties/property-36/1.jpeg",
      "/images/properties/property-36/2.jpeg",
      "/images/properties/property-36/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Luxurious villa with ocean views.",
      "Spacious decks for outdoor entertaining.",
      "Modern design with high ceilings."
    ],
    squareFootage: 2800,
    yearBuilt: 2020,
    pricePerSqFt: 232,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 37,
    title: "Mountain Ridge Home",
    price: 660000,
    location: "Denver, Colorado",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-37/1.jpeg",
    images: [
      "/images/properties/property-37/1.jpeg",
      "/images/properties/property-37/2.jpeg",
      "/images/properties/property-37/3.jpeg",
      "/images/properties/property-37/4.jpeg",
      "/images/properties/property-37/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning mountain views from every room.",
      "Cozy fireplace in the living room.",
      "Perfect for those seeking tranquility."
    ],
    squareFootage: 2600,
    yearBuilt: 2021,
    pricePerSqFt: 254,
    parkingAvailability: "Driveway",
  },
  {
    id: 38,
    title: "Riverside Lodge",
    price: 670000,
    location: "Austin, Texas",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-38/1.jpeg",
    images: [
      "/images/properties/property-38/1.jpeg",
      "/images/properties/property-38/2.jpeg",
      "/images/properties/property-38/3.jpeg",
      "/images/properties/property-38/4.jpeg",
      "/images/properties/property-38/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming lodge with riverside access.",
      "Spacious open-plan living.",
      "Ideal for nature enthusiasts and adventurers."
    ],
    squareFootage: 2500,
    yearBuilt: 2022,
    pricePerSqFt: 268,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 39,
    title: "Woodland Retreat",
    price: 680000,
    location: "Seattle, Washington",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-39/1.jpeg",
    images: [
      "/images/properties/property-39/1.jpeg",
      "/images/properties/property-39/2.jpeg",
      "/images/properties/property-39/3.jpeg",
      "/images/properties/property-39/4.jpeg",
      "/images/properties/property-39/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Private woodland retreat with lush surroundings.",
      "Perfect for outdoor activities.",
      "Spacious living area with modern amenities."
    ],
    squareFootage: 2700,
    yearBuilt: 2023,
    pricePerSqFt: 252,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 40,
    title: "Sunny Ridge Villa",
    price: 690000,
    location: "Orlando, Florida",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-40/1.jpeg",
    images: [
      "/images/properties/property-40/1.jpeg",
      "/images/properties/property-40/2.jpeg",
      "/images/properties/property-40/3.jpeg",
      "/images/properties/property-40/4.jpeg",
      "/images/properties/property-40/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful villa with expansive sunny views.",
      "Modern kitchen with high-end appliances.",
      "Close to shopping and dining."
    ],
    squareFootage: 2500,
    yearBuilt: 2022,
    pricePerSqFt: 276,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 41,
    title: "Maple Leaf Lodge",
    price: 700000,
    location: "Phoenix, Arizona",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-41/1.jpeg",
    images: [
      "/images/properties/property-41/1.jpeg",
      "/images/properties/property-41/2.jpeg",
      "/images/properties/property-41/3.jpeg",
      "/images/properties/property-41/4.jpeg",
      "/images/properties/property-41/5.jpeg",
      "/images/properties/property-41/6.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning lodge with maple finishes.",
      "Bright and airy living spaces.",
      "Ideal for family vacations."
    ],
    squareFootage: 2800,
    yearBuilt: 2023,
    pricePerSqFt: 250,
    parkingAvailability: "Driveway",
  },
  {
    id: 42,
    title: "Cedar View Home",
    price: 710000,
    location: "Los Angeles, California",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-42/1.jpeg",
    images: [
      "/images/properties/property-42/1.jpeg",
      "/images/properties/property-42/2.jpeg",
      "/images/properties/property-42/3.jpeg",
      "/images/properties/property-42/4.jpeg",
      "/images/properties/property-42/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Charming home with cedar finishes.",
      "Lovely outdoor space for relaxation.",
      "Great for families seeking tranquility."
    ],
    squareFootage: 2500,
    yearBuilt: 2021,
    pricePerSqFt: 284,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 43,
    title: "Willow Springs House",
    price: 720000,
    location: "New York, New York",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-43/1.jpeg",
    images: [
      "/images/properties/property-43/1.jpeg",
      "/images/properties/property-43/2.jpeg",
      "/images/properties/property-43/3.jpeg",
      "/images/properties/property-43/4.jpeg",
      "/images/properties/property-43/5.jpeg",
      "/images/properties/property-43/6.jpeg",
      "/images/properties/property-43/7.jpeg",
      "/images/properties/property-43/8.jpeg",
      "/images/properties/property-43/9.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Spacious home with a large backyard.",
      "Perfect for families with children.",
      "Close to parks and schools."
    ],
    squareFootage: 2900,
    yearBuilt: 2022,
    pricePerSqFt: 248,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 44,
    title: "Forest Glen Lodge",
    price: 730000,
    location: "Anchorage, Alaska",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-44/1.jpeg",
    images: [
      "/images/properties/property-44/1.jpeg",
      "/images/properties/property-44/2.jpeg",
      "/images/properties/property-44/3.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Cozy lodge with forest views.",
      "Open concept living area.",
      "Perfect for outdoor enthusiasts."
    ],
    squareFootage: 2000,
    yearBuilt: 2019,
    pricePerSqFt: 365,
    parkingAvailability: "Carport",
  },
  {
    id: 45,
    title: "Lakeside View Home",
    price: 740000,
    location: "Miami, Florida",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-45/1.jpeg",
    images: [
      "/images/properties/property-45/1.jpeg",
      "/images/properties/property-45/2.jpeg",
      "/images/properties/property-45/3.jpeg",
      "/images/properties/property-45/4.jpeg",
      "/images/properties/property-45/5.jpeg",
      "/images/properties/property-45/6.jpeg",
      "/images/properties/property-45/7.jpeg",
      "/images/properties/property-45/8.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning views of the lake.",
      "Open living space perfect for entertaining.",
      "Close to local shops and restaurants."
    ],
    squareFootage: 2700,
    yearBuilt: 2021,
    pricePerSqFt: 274,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 46,
    title: "Pine Valley Home",
    price: 750000,
    location: "Asheville, North Carolina",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-46/1.jpeg",
    images: [
      "/images/properties/property-46/1.jpeg",
      "/images/properties/property-46/2.jpeg",
      "/images/properties/property-46/3.jpeg",
      "/images/properties/property-46/4.jpeg",
      "/images/properties/property-46/5.jpeg",
      "/images/properties/property-46/6.jpeg",
      "/images/properties/property-46/7.jpeg",
      "/images/properties/property-46/8.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful home located in Pine Valley.",
      "Large windows for natural light.",
      "Ideal for families and entertaining."
    ],
    squareFootage: 2600,
    yearBuilt: 2022,
    pricePerSqFt: 288,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 47,
    title: "Canyon Crest Residence",
    price: 760000,
    location: "Phoenix, Arizona",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-47/1.jpeg",
    images: [
      "/images/properties/property-47/1.jpeg",
      "/images/properties/property-47/2.jpeg",
      "/images/properties/property-47/3.jpeg",
      "/images/properties/property-47/4.jpeg",
      "/images/properties/property-47/5.jpeg",
      "/images/properties/property-47/6.jpeg",
      "/images/properties/property-47/7.jpeg",
      "/images/properties/property-47/8.jpeg",
      "/images/properties/property-47/9.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning views of the canyon from this residence.",
      "Spacious living and dining areas.",
      "Perfect for those who love the outdoors."
    ],
    squareFootage: 2900,
    yearBuilt: 2022,
    pricePerSqFt: 262,
    parkingAvailability: "Driveway",
  },
  {
    id: 48,
    title: "Sunny Ridge Villa",
    price: 770000,
    location: "Las Vegas, Nevada",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-48/1.jpeg",
    images: [
      "/images/properties/property-48/1.jpeg",
      "/images/properties/property-48/2.jpeg",
      "/images/properties/property-48/3.jpeg",
      "/images/properties/property-48/4.jpeg",
      "/images/properties/property-48/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Beautiful villa with expansive views of Las Vegas.",
      "Modern kitchen with high-end appliances.",
      "Perfect for luxury living."
    ],
    squareFootage: 2900,
    yearBuilt: 2022,
    pricePerSqFt: 270,
    parkingAvailability: "2 Car Garage",
  },
  {
    id: 49,
    title: "Lakefront Haven",
    price: 780000,
    location: "Chicago, Illinois",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-49/1.jpeg",
    images: [
      "/images/properties/property-49/1.jpeg",
      "/images/properties/property-49/2.jpeg",
      "/images/properties/property-49/3.jpeg",
      "/images/properties/property-49/4.jpeg",
      "/images/properties/property-49/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Stunning lakefront property with modern design.",
      "Spacious living areas with floor-to-ceiling windows.",
      "Great for hosting gatherings."
    ],
    squareFootage: 3200,
    yearBuilt: 2023,
    pricePerSqFt: 244,
    parkingAvailability: "Attached Garage",
  },
  {
    id: 50,
    title: "Mountainview Lodge",
    price: 790000,
    location: "Salt Lake City, Utah",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "/images/properties/property-50/1.jpeg",
    images: [
      "/images/properties/property-50/1.jpeg",
      "/images/properties/property-50/2.jpeg",
      "/images/properties/property-50/3.jpeg",
      "/images/properties/property-50/4.jpeg",
      "/images/properties/property-50/5.jpeg"
    ],
    listingType: 'For Sale',
    description: [
      "Luxurious lodge with breathtaking mountain views.",
      "Spacious outdoor area for entertaining.",
      "Ideal for nature lovers."
    ],
    squareFootage: 3100,
    yearBuilt: 2023,
    pricePerSqFt: 255,
    parkingAvailability: "2 Car Garage",
  }
];

export default properties;
