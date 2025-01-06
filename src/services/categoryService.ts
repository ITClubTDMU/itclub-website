import { CategoryPayload } from "@/types/category";
import { http } from "@/lib/http";

const CATEGORY_PATH = "/category";

export const CategoryService = {
  getAll: async () => {
    return await http.getList<CategoryPayload>(CATEGORY_PATH);
  },
};
