// Base API response type
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// Awards
export interface Award {
  id: number;
  photo: string;
  ar_title: string;
  en_title: string;
  created_At: string;
  updated_at: string;
}

// Pictures
export interface Picture {
  id: number;
  picture: string;
  ar_name: string;
  en_name: string;
  height: number;
  width: number;
  ar_paint: string;
  en_paint: string;
  ar_material: string;
  en_material: string;
  date: string;
}

// CV
export interface CV {
  photo: string;
  ar_headline: string;
  en_headline: string;
  ar_body: string;
  en_body: string;
}

// Contact
export interface ContactInfo {
  id: number;
  gmail: string;
  facebook: string;
  created_At: string;
  updated_at: string;
}
