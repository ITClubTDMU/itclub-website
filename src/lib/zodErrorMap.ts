import { z, ZodIssueCode } from "zod";

export const zodErrorMap: z.ZodErrorMap = (issue, ctx) => {
  console.log(issue, ctx);
  const path = issue.path.join('>');

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      return {
        message: `Dữ liệu cần có kiểu được cho phép`,
      };
    case ZodIssueCode.too_small:
      if (issue.type === "string") {
        return { message: `Phải có ít nhất ${issue.minimum} ký tự.` };
      }
      return { message: `Giá trị tối thiểu của ${path} là ${issue.minimum}` };
    case ZodIssueCode.too_big:
      return { message: `Giá trị quá lớn.` };
    default:
      return { message: "Lỗi không xác định." };
  }
};
