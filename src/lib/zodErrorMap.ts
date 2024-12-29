import { z, ZodIssueCode } from "zod";

export const zodErrorMap: z.ZodErrorMap = (issue) => { // ctx is second params
  // console.log(issue, ctx);
  const path = issue.path.join(">");

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      return {
        message: `Dữ liệu không đúng định dạng ${issue.expected}`,
      };
    case ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: `Email không hợp lệ.` };
      }
      return { message: `Không đúng chuỗi ký tự.` };
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
