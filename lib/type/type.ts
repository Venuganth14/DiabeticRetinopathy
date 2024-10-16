export type Airports = {
  readonly id: number;
  readonly code: string;
  readonly airport: string;
}

export type SearchFormData = {
  departure: string;
  destination: string;
  departure_date: Date;
  return_date: Date;
  adults: string;
  children: string;
  infants: string;
  cabin_class: string;
  trip_type: string;
};

export type DiabeticRetinopathyAdditionalInfo = {
  id: number;
  "meta-title": string;
  "meta-description": string;
  breadcrumb: string;
  video: string;
  "main-title1": string;
  "main-title2": string;
  "main-description": string;
  
  page: string;

  overview?: string;
  symptoms?: string;
  lifestyleChanges?: string;
  diagnosticTests?: string;
  treatmentOptions?: string;
  url:string;
  visuals?: { imageUrl: string; description: string }[];
  resources?: {
    videoUrl?: string;
    articleLinks?: string[];
    supportGroupLinks?: string[];
  };
};


export type DetailCardTypes = {
  id: number;
  image: string;
  alt: string;
  title: string;
  price: string;
  nights: string;
  flights: string;
  hotel: string;
  bed: string;
  trip: string;
  aos: string;
  url: string;
  page: string;
  "main-url": string;
};

export type DiabeticRetinopathyStagePage = {
  id: number;
  "meta-title": string;
  "meta-description": string;
  "main-breadcrumb": string;
  "main-url-breadbrumb": string;
  breadcrumb: string;
  "main-title1": string;
  "main-title2": string;
  "main-description": string;
  overview: string;
  symptoms: string;
  treatmentOptions: string;
  url:string;
  visuals: {
    imageUrl: string;
    description: string;
  }[];
  resources: {
    videoUrl?: string;
    articleLinks?: string[];
    brochureUrl?: string;
    supportGroupLinks?: string[];
  };

};



export type ItenaryCardTypes = {
  id: number;
  day: string;
  title: string;
  description: string;
  aos: string;
  url: string;
};

export type SubDetail = {
  id: number;
  detail: string;
  url: string;
};

export type detailPageCarousel = {
  id: number;
  image: string;
  alt: string;
  url: string;
};

export type OtherDetails = {
  id: number;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  page: string;
  "main-url": string;
};

export type BestOffersCard = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  url: string;
};

export type FlightDetails = {
  id: number;
  airlineImage: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  departureAriport: string;
  arrivalAirport: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  stopCount: string;
  type: string;
  url: string;
};

export type OverviewDetails = {
  id: number;
  overviewDesc1: string[];
  overviewDesc2: string[];
  summaryDesc1: string[];
  summaryDesc2: string[];
  mapUrl: string[];
  durationImage: string[];
  durationTime: string[];
  duration: string[];
  durationPrice: string[];
  weatherLocation: string[];
  weatherLocationName: string[];
  locationDetailTitle: string[];
  locationDetailDesciption: string[];
  cultureImage: string;
  cultureImageAlt: string;
  url: string;
};

export type HotelFacilities = {
  id: number;
  name: string;
  image: string;
  url: string;
};

export type LocationInformation = {
  id: number;
  description: string;
  url: string;
};

export type CustomerFeedBack = {
  id: number;
  name: string;
  comment: string;
  link: string;
}
