export type News = {
  _id?: string;
  title: string;
  content: string;
  shortDescription: string;
  thumbnail: string;
  categories: string[];
  categoriesString?: string;
  createdAt?: number;
  updatedAt?: number | null;
  images: string[];
};

export type NewsPayload = {
  title: string;
  content: string;
  shortDescription: string;
  thumbnail: string;
  categories: string[];
};

export type NewsSearchParams = {
  pageNumber: number;
  pageSize: number;
  sortBy?: string;
  order?: "asc" | "desc";
  search?: string;
};
