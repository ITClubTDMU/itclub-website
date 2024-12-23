export type User = {
  _id?: string;
  username: string;
  password: string;
  email: string;
  roles: string[];
  fullName: string;
  avatar: string;
  labels: string[];
  contribution: number;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date | null;
  _destroy: boolean;
};
