import z from "zod";


export const messageSchema = z.object({
    content:z
    .string()
    .min(10 ,'message mustbe atlist 10 charecters')
    .max(400,'message must be atmost 400 charectes')
})




