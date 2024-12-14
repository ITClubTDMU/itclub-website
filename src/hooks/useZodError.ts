import { z } from "zod";

import { zodErrorMap } from "@/lib/zodErrorMap";

export const useZodErrors = () => {
  z.setErrorMap(zodErrorMap);
};
