export interface Auth {
  user: User;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  type: string;
  firstTime: boolean;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  type: string;
}

export interface RegisterTechnician {
  name: string;
  email: string;
  phone: string;
  password: string;
  category: string;
  experience: string;
  speciality: string;
  lat: string;
  long: string;
  type: string;
}
