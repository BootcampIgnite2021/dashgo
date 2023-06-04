import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { api } from "../services/api";
import { UserResponsePagination } from "../interfaces/users";

export async function getUsres(page: number): Promise<UserResponsePagination> {
  const { data, headers } = await api.get("/users", {
    params: { page },
  });

  const totalCount = Number(headers["x-total-count"]);
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(["users", page], () => getUsres(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  }) as UseQueryResult<UserResponsePagination, unknown>;
}
