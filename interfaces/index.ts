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
  type: boolean;
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
  lat: string;
  long: string;
  type: string;
}

export interface Category {
  id: string;
  code: string;
  image: string;
  name: string;
  description: string;
}

export interface Chat {
  _id: string;
  text: string;
  createdAt: Date;
  unread: boolean;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export interface UserList {
  id: string;
  name: string;
  image: string;
  placeholder: string;
  unreadCount: string;
  onPress: () => void;
}
