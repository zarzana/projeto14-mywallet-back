import joi from "joi";

export const signUpSchema = joi.object({
    'name': joi.string().required(),
    'email': joi.string().email({ tlds: { allow: false } }).required(),
    'password': joi.string().min(3).required()
});

export const signInSchema = joi.object({
    'email': joi.string().email({ tlds: { allow: false } }).required(),
    'password': joi.string().required()
});
