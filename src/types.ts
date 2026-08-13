export interface DentalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  highlight?: string;
  date?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  alt: string;
}

export interface ClinicInfo {
  name: string;
  marathiName: string;
  doctorName: string;
  address: string;
  landmark: string;
  area: string;
  city: string;
  pincode: string;
  phone: string;
  formattedPhone: string;
  plusCode: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  whatsappUrl: string;
  whatsappNumber: string;
}
