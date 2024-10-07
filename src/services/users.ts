import { TUser } from "@/types/TUser";
import api from "@/utils/api";

type PaginatedResponse<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
  support: {
    url: string;
    text: string;
  };
};

export async function findAllUser(
  page: number = 1
): Promise<PaginatedResponse<TUser[]> | null> {
  try {
    const response = await api.get<PaginatedResponse<TUser[]>>(
      `/users?per_page=4&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in findAllUser:", error);
    return null;
  }
}

export async function findOneUser(id: number): Promise<TUser | null> {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data?.data as TUser;
  } catch (error) {
    console.error("Error in findOneUser:", error);
    return null;
  }
}
