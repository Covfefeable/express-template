import { RequestHandler } from "express"
import { AnyZodObject } from "zod"
import HttpError from "../../utils/http-error"

export const validate = (
  schema: AnyZodObject,
  source: "body" | "query" | "params" = "body"
): RequestHandler => {
  return (req, res, next) => {
    const data = source === "body" ? req.body : source === "query" ? req.query : req.params
    const result = schema.safeParse(data)
    if (!result.success) {
      const msg = result.error.errors.map((e) => e.message).join("; ")
      next(new HttpError(400, msg))
      return
    }
    next()
  }
}
