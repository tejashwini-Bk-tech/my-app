import z from "zod";

export const varifySchema = z.object({
    code:z.string().min(6,{message:"varification code must be 6 digit"})
})