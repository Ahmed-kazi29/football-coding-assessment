import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axiosInstance";

type QueryResult<T> = UseQueryResult<T, AxiosError>;

function useCustomQuery<T>(
  endpoint: string,
  queryKey: string[],
  options?: Omit<UseQueryOptions<T, AxiosError>, "queryKey" | "queryFn">
): QueryResult<T> {
  return useQuery<T, AxiosError>({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get<T>(endpoint);
      return data;
    },
    ...options,
  });
}

export default useCustomQuery;
