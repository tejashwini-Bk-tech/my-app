import z from "zod";

export const usernameValidation = z
.string()
.min(2,"username must be atlist 2 charecter")
.max(20,'username must be no more then 20 charecters')
.regex(/^[A-Za-z0-9]+$/,"username must not be contain speciall charecter")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message: "invalid email"}),
    password:z.string().min(6,{message : "password must be atlist 6 charecters"})
    
})