export type User = {
  name: string;
  email: string;
  created_at: string;
};

export type UserResponse = Omit<User, "created_at"> & {
  id: string;
  createdAt: string;
};

export type UserResponsePagination = {
  users: UserResponse[];
  totalCount: number;
};
