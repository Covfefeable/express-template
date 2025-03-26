import { z } from "zod";

// 定义登录请求的验证 schema
export const LoginSchema = z.object({
  username: z
    .string()
    .min(3, "用户名至少3个字符")
    .max(20, "用户名最多20个字符"),
  password: z.string().min(6, "密码至少6个字符").max(20, "密码最多20个字符"),
});

// 使用 typeof 导出类型
export type LoginInput = z.infer<typeof LoginSchema>;

// 定义注册请求的验证 schema
export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, "用户名至少3个字符")
    .max(20, "用户名最多20个字符"),
  password: z.string().min(6, "密码至少6个字符").max(20, "密码最多20个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
