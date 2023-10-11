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
