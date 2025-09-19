import z, { email } from "zod";


export const signinSChema = z.object({
    email: z.string().email({ message: "invalid email" }),
    password:z.string()
})