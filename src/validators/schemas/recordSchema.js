import joi from "joi";

export const recordSchema = joi.object({
    'value': joi.number().positive().precision(2).required(),
    'description': joi.string().required(),
    'type': joi.string().valid('in','out').required()
});