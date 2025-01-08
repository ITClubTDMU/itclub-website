type CategoryPayload = {
  _id?: string;
  categoryName: string;
  createdAt: number;
  updatedAt: number | null;
};

type CategoryRes = {
  payload: CategoryPayload[];
  status: number;
  message: string;
};
export { type CategoryPayload, type CategoryRes };
