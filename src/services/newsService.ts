import { News, NewsPayload, NewsSearchParams } from "@/types/news";
import { http, httpAuth } from "@/lib/http";

const NEWS_PATH = "/news";

export const NewsService = {
  getAll: async (searchParams?: Partial<NewsSearchParams>) => {
    // console.log(searchParams, "????");
    return await http.getList<News, Partial<NewsSearchParams>>(
      NEWS_PATH,
      searchParams
    );
  },
  get: async (id: string | undefined) => {
    return await httpAuth.get<News>(`${NEWS_PATH}/${id}`);
  },
  update: async (id: string | undefined, data: NewsPayload) => {
    return await httpAuth.put<News>(`${NEWS_PATH}/${id}`, data);
  },
  delete: async (id: string | undefined) => {
    return await httpAuth.delete<News>(`${NEWS_PATH}/${id}`);
  },
  create: async (data: NewsPayload) => {
    return await httpAuth.post<News>(NEWS_PATH, data);
  },
};
